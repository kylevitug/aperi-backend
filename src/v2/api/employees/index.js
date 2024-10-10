const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllEmployees);

module.exports = router;
