const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', controllers.handleRefreshToken);

module.exports = router;
