// const Tenant = require('../../model/Tenant');
// const Company = require('../../model/Company');
const Tenant = require('../../model_mongoose/Tenants');
const Company = require('../../model_mongoose/Companies');
const { getOneTenant } = require('../tenants/services');
const tenantServices = require('../tenants/services');
const services = require('./services');
const jwt = require('jsonwebtoken');

const getAllCompaniesByTenantId = async (req, res) => {
  const companies = await services.getCompanyByTenantId(req.tenantId);
  res.json(companies);
};

const getOneCompanyByTenantIdAndCompanyId = async (req, res) => {
  //check if company belongs to tenant, if not, return 403
  if (!req?.params?.companyId)
    return res.status(400).json({ message: 'Company ID required.' });
  if (!req?.tenantId) return res.sendStatus(403);
  if (!req?.permissions) return res.sendStatus(403);
  console.log(req.tenantId);
  console.log(req.params.companyId);
  console.log(req.permissions);
  let permissionArray = req.permissions.filter(
    (permission) =>
      permission.name === 'companiesRetrieve' &&
      permission.companyId.toString() === req.params.companyId
  );
  console.log(permissionArray);
  if (permissionArray.length === 0) {
    console.log('forbidden');
    return res.sendStatus(403);
  }
  console.log('not forbidden');
  const companies = await services.getOneCompanyByCompanyIdAndTenantId(
    req.tenantId,
    req.params.companyId
  );
  res.json(companies);
};

const getAllCompaniesOld = async (req, res) => {
  // const tenant = await getOneTenant({ email: req.email });
  // const companies = Tenant.aggregate.lookup({
  //   from: 'users',
  //   localField: 'userId',
  //   foreignField: '_id',
  //   as: 'users',
  // });
  // res.json(tenant.companies);
  const companies = await Tenant.findOne({ email: req.email })
    .populate('companies.company')
    .exec();
  // console.log(companies.companies, 'companies');
  res.json(companies.companies);
};

const createNewCompany = async (req, res) => {
  if (!req?.body?.name)
    return res.status(400).json({ message: 'Company name required.' });
  if (!req?.tenantId) return res.sendStatus(401);
  try {
    const newCompany = {
      tenantId: req.tenantId,
      name: req.body.name,
    };
    const createdCompany = await services.createNewCompany(newCompany);
    return res.status(201).json({
      message: `New company with name ${req.body.name} created!`,
      data: createdCompany,
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.sendStatus(409);
    } else if (err.code === 'ETIMEDOUT') {
      return res.sendStatus(504);
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

const updateCompany = async (req, res) => {
  if (!req?.tenantId) return res.sendStatus(401);
  try {
    const newCompany = {
      tenantId: req.tenantId,
      companyId: req.body.companyId,
      name: req.body.name,
      isInactive: req.body.isInactive,
    };

    const createdCompany = await services.updateCompany(newCompany);
    return res.status(201).json({
      message: `Updated company with name ${req.body.name}!`,
      data: createdCompany,
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.sendStatus(409);
    } else if (err.code === 'ETIMEDOUT') {
      return res.sendStatus(504);
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

const setInactiveCompany = async (req, res) => {
  if (!req?.tenantId) return res.sendStatus(401);
  try {
    const companyId = req.params.companyId;
    const inactiveCompany = await services.deleteCompany(companyId);
    return res.status(201).json({
      message: `Set Inactive company with ID ${companyId}!`,
      data: inactiveCompany,
    });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.sendStatus(409);
    } else if (err.code === 'ETIMEDOUT') {
      return res.sendStatus(504);
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

const createNewCompanyOld = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  if (!req?.body?.name)
    return res.status(400).json({ message: 'Company name required.' });
  const refreshToken = cookies.jwt;
  // const output = jwt.verify(
  //   refreshToken,
  //   process.env.REFRESH_TOKEN_SECRET,
  //   async (err, decoded) => {
  //     if (err) return res.sendStatus(403); //Forbidden
  //     const Tenant = await tenantServices.getOneTenandById(decoded.id);
  //     if (!Tenant) return res.sendStatus(401);
  //     if (!req?.body?.name)
  //       return res.status(400).json({ message: 'Company name required.' });
  //   }
  // );
  let decoded;
  let tenant;
  try {
    decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    tenant = await tenantServices.getOneTenandById(decoded.id);
    if (!tenant) return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
  console.log(tenant);
  console.log(decoded);
  try {
    const newCompany = {
      name: req.body.name,
      tenants: [
        {
          tenantId: decoded.id,
          roleName: 'Admin',
        },
      ],
      roles: [
        {
          name: 'Admin',
          permissions: [
            {
              name: 'Company',
              create: true,
              retrieve: true,
              update: true,
              delete: true,
            },
          ],
        },
      ],
    };
    const createdCompany = await services.createNewCompany(newCompany);
    console.log(createdCompany);
    tenant.companies.push(createdCompany);
    const tenantResult = await tenant.save();
    res.status(201).json({
      message: `New company ${req.body.name} created!`,
      companyData: createdCompany,
      tenantData: tenantResult,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  // const result = await tenant.save();
  // res.status(201).json(result);
};

// const Employee = require('../src/model/Employee');

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees)
    return res.status(204).json({ message: 'No employees found.' });
  res.json(employees);
};

const createNewEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    return res
      .status(400)
      .json({ message: 'First and last names are required' });
  }

  try {
    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateEmployee = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }
  if (req.body?.firstname) employee.firstname = req.body.firstname;
  if (req.body?.lastname) employee.lastname = req.body.lastname;
  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }
  const result = await employee.deleteOne(); //{ _id: req.body.id }
  res.json(result);
};

const getEmployee = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.params.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.params.id}.` });
  }
  res.json(employee);
};

module.exports = {
  getAllCompaniesByTenantId,
  getOneCompanyByTenantIdAndCompanyId,
  createNewCompany,
  updateCompany,
  setInactiveCompany,
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
