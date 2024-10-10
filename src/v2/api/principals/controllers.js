const services = require('./services');

const getAllPrincipals = async (req, res) => {
  const principals = await services.getAllPrincipals();
  res.json(principals);
};

module.exports = {
  getAllPrincipals,
};
