const services = require('./services');

const getAllEmployees = async (req, res) => {
  const companies = await services.getAllEmployees();
  res.json(companies.companies);
};

module.exports = {
  getAllEmployees,
};
