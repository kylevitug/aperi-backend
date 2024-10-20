const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllSupplierProductCodes);
router.route('/').post(controller.createSupplierProductCode);
router.route('/').put(controller.updateSupplierProductCode);
router.route('/').delete(controller.deleteSupplierProductCode);

module.exports = router;
