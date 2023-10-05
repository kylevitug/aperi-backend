const express = require('express');
const router = express.Router();
const controller = require('./controller');
// const employeesController = require('./employeesController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router
  .route('/')
  .get(controller.getAllCompaniesByTenantId)
  .post(controller.createNewCompany)
  .put(controller.updateCompany);

router
  .route('/:companyId')
  .get(controller.getOneCompanyByTenantIdAndCompanyId)
  .delete(controller.setInactiveCompany);
//   .post(
//     verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
//     employeesController.createNewEmployee
//   )
//   .put(
//     verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
//     employeesController.updateEmployee
//   )
//   .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);

// router.route('/:id').get(employeesController.getEmployee);

module.exports = router;
