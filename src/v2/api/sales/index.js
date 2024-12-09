const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllSales);
router
  .route('/getAllSalesByProductGroupNameByDateByServerId')
  .get(controller.getAllSalesByProductGroupNameByDateByServerId);

module.exports = router;
