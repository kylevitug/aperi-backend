const services = require('./services');

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
  getAllData,
  create,
  updateById,
  deleteById,
};