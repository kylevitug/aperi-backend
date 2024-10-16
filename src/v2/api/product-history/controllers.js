const services = require('./services');

const getDataById = async (req, res) => {
  const requiredFields = ['serverid', 'startdate', 'enddate'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const data = await services.getDataById(req);
  const { cleanDataForMachineLearning } = req.body;
  console.log(cleanDataForMachineLearning);
  let filteredData = data.filter(
    (transaction) => transaction.trxtype === 'Sale'
  );
  if (cleanDataForMachineLearning === 'true') {
    filteredData.forEach((filteredData) => {
      delete filteredData.trxtype;
      delete filteredData.name;
      delete filteredData.buyprice;
      delete filteredData.quantity;
      delete filteredData.uom;
      delete filteredData.trxid;
    });
    console.log('Data cleaned for machine learning');
    console.log(filteredData);
  }

  res.json(filteredData);
};

const getAllData = async (req, res) => {
  const data = await services.getAllData();
  res.json(data);
};

const create = async (req, res) => {
  const requiredFields = [''];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.create(req);
  res.json(response);
};

const updateById = async (req, res) => {
  const requiredFields = [''];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.updateById(req);
  res.json(response);
};

const deleteById = async (req, res) => {
  const requiredFields = [''];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.deleteById(req.body);
  res.json(response);
};
module.exports = {
  getDataById,
  getAllData,
  create,
  updateById,
  deleteById,
};
