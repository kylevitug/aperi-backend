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
  console.log('serverId', serverId);
  console.log('principalName', principalName);
  if (!serverId || !principalName) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  const lastPurchase = await services.getLastPurchaseByPrincipalNameByServerId(
    serverId,
    principalName
  );
  res.json(lastPurchase);
};

const getLastPurchaseBySupplierNameByServerId = async (req, res) => {
  const { serverId, supplierName } = req.query;
  console.log('serverId', serverId);
  console.log('supplierName', supplierName);
  if (!serverId || !supplierName) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  const lastPurchase = await services.getLastPurchaseBySupplierNameByServerId(
    serverId,
    supplierName
  );
  res.json(lastPurchase);
};

const getAllPurchaseHeaders = async (req, res) => {
  try {
    // Extract query parameters from the request
    const filters = req.query; // This will capture all query parameters like ?supplierid=5&total=100.50
    const data = await services.getAllPurchaseHeaders(filters);
    res.json(data);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching purchase headers' });
  }
};

const createPurchaseHeader = async (req, res) => {
  const requiredFields = [
    'purchasedate',
    'supplierid',
    'refnumber',
    'total',
    'employeeid',
    'isreceived',
    'deliverydate',
    'supplierclassid',
    'billedstatus',
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(400).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }

  try {
    const response = await services.createPurchaseHeader(req);
    res.status(201).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while creating the purchase header' });
  }
};

const updatePurchaseHeaderById = async (req, res) => {
  const requiredFields = [
    'purchaseheaderid',
    'purchasedate',
    'supplierid',
    'refnumber',
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(400).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }

  try {
    const response = await services.updatePurchaseHeaderById(req);
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while updating the purchase header' });
  }
};

const deletePurchaseHeaderById = async (req, res) => {
  const { purchaseheaderid } = req.body;
  if (!purchaseheaderid) {
    return res.status(400).json({ error: 'Purchase Header ID is required' });
  }

  try {
    const response = await services.deletePurchaseHeaderById(purchaseheaderid);
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the purchase header' });
  }
};

module.exports = {
  getLastThreeByPrincipalName,
  getLastPurchaseByPrincipalNameByServerId,
  getAllPurchaseHeaders,
  createPurchaseHeader,
  updatePurchaseHeaderById,
  deletePurchaseHeaderById,
  getLastPurchaseBySupplierNameByServerId,
};
