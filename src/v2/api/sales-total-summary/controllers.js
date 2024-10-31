const services = require('./services');

async function getAggregatedData(req, res) {
  try {
    // Extract parameters from the request
    const { serverIds, startDate, endDate } = req.query;

    // Validate serverIds as a non-empty array of numbers
    if (
      !serverIds ||
      !Array.isArray(JSON.parse(serverIds)) ||
      JSON.parse(serverIds).length === 0
    ) {
      return res
        .status(400)
        .json({ error: 'Invalid serverIds. Provide a non-empty array.' });
    }

    // Validate startDate and endDate
    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ error: 'Both startDate and endDate are required.' });
    }

    // Convert serverIds from query string to an array of integers
    const parsedServerIds = JSON.parse(serverIds).map((id) => parseInt(id, 10));

    // Call the service function
    const data = await services.getAggregatedDataByServerIds(
      parsedServerIds,
      startDate,
      endDate
    );

    // Send response with data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
}

module.exports = { getAggregatedData };
