const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router
  .route('/getLastThreeByPrincipalName')
  .get(controller.getLastThreeByPrincipalName);

module.exports = router;
