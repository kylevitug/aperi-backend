const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router
  .route('/getLastThreeByPrincipalName')
  .get(controller.getLastThreeByPrincipalName);
router.route('/getLastPurchaseByPrincipalNameByServerId').get(controller.getLastPurchaseByPrincipalNameByServerId);

module.exports = router;
