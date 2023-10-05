const services = require('./services');

const getAllEmployees = async (req, res) => {
  const employees = await services.getAllEmployees();
  res.json(employees);
};

module.exports = {
  getAllEmployees,
};
