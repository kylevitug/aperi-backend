const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllBirPermitTypes);
router.route('/').post(controller.createBirPermitType);
router.route('/').put(controller.updateBirPermitType);
router.route('/').delete(controller.deleteBirPermitType);


module.exports = router;
