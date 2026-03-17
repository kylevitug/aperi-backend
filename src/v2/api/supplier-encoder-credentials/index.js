const express = require('express');
const router = express.Router();
const controller = require('./controllers');
const requireApiKey = require('../../middleware/requireApiKey');

router.route('/').get(requireApiKey, controller.getSupplierEncoderCredentials);

module.exports = router;
