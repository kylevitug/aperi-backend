const services = require('./services');

const getAllServers = async (req, res) => {
  const servers = await services.getAllServers();
  res.json(servers);
};

module.exports = {
  getAllServers,
};
