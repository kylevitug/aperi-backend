const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllBirPermits);
router.route('/').post(controller.createBirPermit);
router.route('/').put(controller.updateBirPermit);
router.route('/').delete(controller.deleteBirPermit);

module.exports = router;
