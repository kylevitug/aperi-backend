const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllData);
router.route('/').post(controller.create);

module.exports = router;
