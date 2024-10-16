const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllSales);

module.exports = router;
