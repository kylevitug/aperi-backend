const services = require('./services');

const getAllSupplierProductCodes = async (req, res) => {
  const supplierProductCodes = await services.getAllSupplierProductCodes();
  res.json(supplierProductCodes);
};

const createSupplierProductCode = async (req, res) => {
  const { sapcode, product_name } = req.body;
  if (!sapcode || !product_name) {
    return res.status(400).json({
      error: 'sapcode and product_name are required',
    });
  }
  const response = await services.createSupplierProductCode(req.body);
  res.json(response);
};

const updateSupplierProductCode = async (req, res) => {
  const { sapcode, product_name, new_sapcode, new_product_name } = req.body;
  if (!sapcode || !product_name || !new_sapcode || !new_product_name) {
    return res.status(400).json({
      error:
        'sapcode, product_name, new_sapcode, new_product_name are required',
    });
  }
  const response = await services.updateSupplierProductCode(req.body);
  res.json(response);
};

const deleteSupplierProductCode = async (req, res) => {
  const { sapcode, product_name } = req.body;
  if (!sapcode || !product_name) {
    return res.status(400).json({
      error: 'sapcode and product_name are required',
    });
  }
  const supplierProductCode = await services.deleteSupplierProductCode(
    req.body
  );
  res.json(supplierProductCode);
};

module.exports = {
  getAllSupplierProductCodes,
  createSupplierProductCode,
  updateSupplierProductCode,
  deleteSupplierProductCode,
};
