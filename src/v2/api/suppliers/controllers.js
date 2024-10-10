const services = require('./services');

const getAllSuppliers = async (req, res) => {
  const suppliers = await services.getAllSuppliers();
  res.json(suppliers);
};

module.exports = {
  getAllSuppliers,
};
