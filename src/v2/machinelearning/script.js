// Import TensorFlow.js
const tf = require('@tensorflow/tfjs-node');
const { plot } = require('nodeplotlib');
const axios = require('axios');

// Step 1: Data Preparation
// Fetch JSON data from API
async function fetchData() {
  try {
    const response = await axios.get('https://example.com/api/data'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Preprocess JSON data to create input features and target values
function preprocessData(data, sequenceLength) {
  const inputs = [];
  const targets = [];

  // Initialize cumulative values for sales, returns, restocks, and total
  let cumulativeSales = 0;
  let cumulativeReturns = 0;
  let cumulativeRestocks = 0;

  // Prepare data with cumulative values
  const processedData = data.map((d) => {
    if (d.trxtype === 'Sale') {
      cumulativeSales += Math.abs(d.total);
    } else if (d.trxtype === 'Return') {
      cumulativeReturns += d.total;
    } else if (d.trxtype === 'Ingoing') {
      cumulativeRestocks += d.total;
    }
    return {
      date: d.datecreated,
      sales: cumulativeSales,
      returns: cumulativeReturns,
      restocks: cumulativeRestocks,
      total: d.total,
    };
  });

  // Normalize the features
  const sales = processedData.map((d) => d.sales);
  const returns = processedData.map((d) => d.returns);
  const restocks = processedData.map((d) => d.restocks);
  const totals = processedData.map((d) => d.total);

  const maxSales = Math.max(...sales);
  const maxReturns = Math.max(...returns);
  const maxRestocks = Math.max(...restocks);
  const maxTotal = Math.max(...totals.map(Math.abs));

  const normalizedData = processedData.map((d) => ({
    sales: d.sales / maxSales,
    returns: d.returns / maxReturns,
    restocks: d.restocks / maxRestocks,
    total: d.total / maxTotal,
  }));

  // Create sequences for LSTM input
  for (let i = 0; i < normalizedData.length - sequenceLength; i++) {
    const sequence = normalizedData.slice(i, i + sequenceLength);
    const input = sequence.map((d) => [
      d.sales,
      d.returns,
      d.restocks,
      d.total,
    ]);
    const target = normalizedData[i + sequenceLength].sales;

    inputs.push(input);
    targets.push(target);
  }

  return {
    inputs: tf.tensor3d(inputs),
    targets: tf.tensor2d(targets, [targets.length, 1]),
  };
}

const sequenceLength = 7; // Define the length of the time sequence to look back

// Step 2: Build the LSTM Model
const model = tf.sequential();
model.add(
  tf.layers.lstm({
    units: 50,
    returnSequences: false,
    inputShape: [sequenceLength, 4], // 4 features: sales, returns, restocks, total
  })
);
model.add(tf.layers.dense({ units: 1 }));

// Compile the model
model.compile({
  optimizer: 'adam',
  loss: 'meanSquaredError',
});

// Step 3: Train the Model
async function trainModel(inputs, targets) {
  await model.fit(inputs, targets, {
    epochs: 50,
    batchSize: 16,
    validationSplit: 0.2,
    callbacks: tf.callbacks.earlyStopping({
      monitor: 'val_loss',
      patience: 5,
    }),
  });
}

// Step 4: Make Predictions
async function predictNextOrder(
  inputSequence,
  maxSales,
  maxReturns,
  maxRestocks,
  maxTotal
) {
  // Prepare input for prediction
  const normalizedInput = inputSequence.map((d) => [
    d.sales / maxSales,
    d.returns / maxReturns,
    d.restocks / maxRestocks,
    d.total / maxTotal,
  ]);
  const inputTensor = tf.tensor3d([normalizedInput], [1, sequenceLength, 4]);

  // Make prediction
  const prediction = model.predict(inputTensor);
  const predictedValue = prediction.arraySync()[0][0] * maxSales; // Denormalize the value

  console.log('Predicted Sales to Order:', predictedValue);
  return predictedValue;
}

// Step 5: Run the Training and Prediction
(async () => {
  const jsonData = await fetchData();
  const { inputs, targets } = preprocessData(jsonData, sequenceLength);
  await trainModel(inputs, targets);

  // Example input for prediction
  const latestDataSequence = jsonData.slice(-sequenceLength);
  const maxSales = Math.max(...jsonData.map((d) => d.sales));
  const maxReturns = Math.max(...jsonData.map((d) => d.returns));
  const maxRestocks = Math.max(...jsonData.map((d) => d.restocks));
  const maxTotal = Math.max(...jsonData.map((d) => Math.abs(d.total)));

  const predictedValue = await predictNextOrder(
    latestDataSequence,
    maxSales,
    maxReturns,
    maxRestocks,
    maxTotal
  );

  // Prepare data for plotting
  const actualSales = jsonData.map((d) => d.sales).slice(-30); // Last 30 days of sales
  const predictedSales = [...actualSales.slice(0, -1), predictedValue];

  // Plot the prediction graph
  plot([
    {
      x: Array.from({ length: actualSales.length }, (_, i) => i + 1),
      y: actualSales,
      type: 'line',
      name: 'Actual Sales',
    },
    {
      x: Array.from({ length: predictedSales.length }, (_, i) => i + 1),
      y: predictedSales,
      type: 'line',
      name: 'Predicted Sales',
    },
  ]);
})();
