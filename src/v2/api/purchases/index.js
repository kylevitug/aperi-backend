const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router
  .route('/getLastThreeByPrincipalName')
  .get(controller.getLastThreeByPrincipalName);
router.route('/getLastPurchaseByPrincipalNameByServerId').get(controller.getLastPurchaseByPrincipalNameByServerId);

router.route('/').get(controller.getAllPurchaseHeaders);
router.route('/').post(controller.createPurchaseHeader);
router.route('/').put(controller.updatePurchaseHeaderById);
router.route('/').delete(controller.deletePurchaseHeaderById);

module.exports = router;
