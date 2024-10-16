const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.route('/').get(controller.getAllData);
router.route('/:id').get(controller.getDataById);
router.route('/').post(controller.create);
router.route('/').put(controller.updateById);
router.route('/').delete(controller.deleteById);


module.exports = router;
