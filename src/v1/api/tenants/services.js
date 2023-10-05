const bcrypt = require('bcrypt');
const connectDb = require('../../config/mysql2Connect');

const createNewTenant = async (newTenant) => {
  const { email, password } = newTenant;
  const hashedPassword = await bcrypt.hash(password, 10);
  const qry = `
  INSERT INTO 
    tenants( email, password )
  VALUES
    (?, ?);
  `;
  const vals = [email, hashedPassword];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};

// const getOneTenandById = async (id) => {
//   const tenant = await Tenant.findById(id).exec();
//   return tenant;
// };

// const getOneTenant = async (params) => {
//   const tenant = await Tenant.findOne(params).exec();
//   return tenant;
// };

const getOneTenantByEmail = async (email) => {
  const qry = `
  SELECT
    *
  FROM tenants
  WHERE email = ?
  `;
  const vals = [email];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};

const getPermissionsByTenantId = async (tenantId) => {
  // const qry = `
  // SELECT 
  //   p.name, tc.companyId 
  // FROM tenants_companies tc , roles r , roles_permissions rp , permissions p 
  // WHERE r.roleId = rp.roleId  
  // AND r.companyId = tc.companyId 
  // AND p.permissionId  = rp.permissionId 
  // AND tc.roleId = r.roleId
  // AND tc.tenantId = ?
  // `;
  const qry = `
  SELECT 
    p.name, tc.companyId 
  FROM tenants_companies tc , roles r , roles_permissions rp , permissions p 
  WHERE r.roleId = rp.roleId  
  AND r.companyId = tc.companyId 
  AND p.permissionId  = rp.permissionId 
  AND tc.roleId = r.roleId
  AND tc.tenantId = ?
  `;
  const vals = [tenantId];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};
// const getOneTenantByToken = async (refreshToken) => {
//   const tenant = await Tenant.findOne({ refreshToken }).exec();
//   return tenant;
// };

module.exports = {
  createNewTenant,
  getOneTenantByEmail,
  getPermissionsByTenantId,
  // getOneTenantByToken,
  // getOneTenant,
  // getOneTenandById,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};
