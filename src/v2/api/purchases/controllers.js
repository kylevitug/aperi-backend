const services = require('./services');

const getLastThreeByPrincipalName = async (req, res) => {
  console.log(req.query);
  const { serverId, principalName } = req.query;
  if (!serverId || !principalName) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  const lastThreePurchase = await services.getLastThreeByPrincipalName(
    serverId,
    principalName
  );
  res.json(lastThreePurchase);
};

module.exports = {
  getLastThreeByPrincipalName,
};
