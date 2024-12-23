const services = require('./services');

const getAllSales = async (req, res) => {
  const requiredFields = ['productid', 'serverid', 'startdate', 'enddate'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }

  const sales = await services.getAllSales(req);
  res.json(sales);
};

const getAllSalesByProductGroupNameByDateByServerId = async (req, res) => {
  const requiredFields = ['productGroupName', 'serverId', 'startDate'];
  const missingFields = requiredFields.filter((field) => !req.query[field]);
  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }

  const sales = await services.getAllSalesByProductGroupNameByDateByServerId(
    req
  );
  res.json(sales);
};

module.exports = {
  getAllSales,
  getAllSalesByProductGroupNameByDateByServerId,
};
