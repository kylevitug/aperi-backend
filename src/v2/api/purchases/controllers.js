const services = require('./services');

const getLastThreeByPrincipalName = async (req, res) => {
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

const getLastPurchaseByPrincipalNameByServerId = async (req, res) => {
  const { serverId, principalName } = req.query;
  if (!serverId || !principalName) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  const lastPurchase = await services.getLastPurchaseByPrincipalNameByServerId(
    serverId,
    principalName
  );
  res.json(lastPurchase);
}


module.exports = {
  getLastThreeByPrincipalName,
  getLastPurchaseByPrincipalNameByServerId
};
