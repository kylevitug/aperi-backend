const Tenant = require('../../model/Tenant');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const initDb = require('../../config/initDb');

const createNewTenant = async (newTenant) => {
  const sequelize = initDb();
  const Tenant_Mysql = require('../../model_mysql_tenants/tenants')(
    sequelize,
    DataTypes
  );
  await Tenant_Mysql.sync({ alter: true });
  const { email, password } = newTenant;
  const hashedPassword = await bcrypt.hash(password, 10);
  const tenant = await Tenant_Mysql.create({
    email: email,
    password: hashedPassword,
  });
  if (tenant?.dataValues) {
    const { password, ...tenantResponse } = tenant?.dataValues;
    return tenantResponse;
  }
};
const getOneTenantByEmail = async (email) => {
  const sequelize = initDb();
  const Refresh_Tokens_Mysql =
    require('../../model_mysql_tenants/refresh_tokens')(sequelize, DataTypes);
  const Tenant_Mysql = require('../../model_mysql_tenants/tenants')(
    sequelize,
    DataTypes
  );
  await Refresh_Tokens_Mysql.sync({ alter: true });
  await Tenant_Mysql.sync({ alter: true });

  const tenant = await Tenant_Mysql.findAll({
    where: { email: email },
  });
  return tenant.dataValues;
};

const getAllTokensByTenantId = async (tenantId) => {
  const sequelize = initDb();
  const Refresh_Tokens_Mysql =
    require('../../model_mysql_tenants/refresh_tokens')(sequelize, DataTypes);
  const refreshTokens = await Refresh_Tokens_Mysql.findAll({
    where: { tenantsid: tenantId },
  });
  return refreshTokens.dataValues;
};

// const getAllEmployees = async () => {
//   const sequelize = new Sequelize('Warehouse', 'user', 'p1y2t3h4o5n6', {
//     host: '25.79.55.64',
//     dialect: 'mysql',
//   });
//   const Employees = require('../../../model_mysql/employees')(
//     sequelize,
//     DataTypes
//   );
//   await Employees.sync({ alter: true });
//   const employees = await Employees.findAll();
//   return employees;
// };

// module.exports = {
//   getAllEmployees,
// };

// const createNewTenant = async (newTenant) => {
//   const { email, password } = newTenant;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const tenant = await Tenant.create({
//     email: email,
//     password: hashedPassword,
//   });
//   if (tenant) {
//     const { password, ...tenantResponse } = tenant._doc;
//     return tenantResponse;
//   }
// };

const getOneTenant = async (params) => {
  const tenant = await Tenant.findOne(params).exec();
  return tenant;
};

// const getOneTenantByEmail = async (email) => {
//   const tenant = await Tenant.findOne({ email: email }).exec();
//   return tenant;
// };

const getOneTenantByToken = async (refreshToken) => {
  const tenant = await Tenant.findOne({ refreshToken }).exec();
  return tenant;
};

module.exports = {
  createNewTenant,
  getOneTenantByEmail,
  getOneTenantByToken,
  getOneTenant,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};
