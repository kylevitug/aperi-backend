const connectDb = require('../../config/mysql2Connect');

module.exports.createNewCompany = async (newCompany) => {
  const { tenantId, name } = newCompany;
  const db = await connectDb();

  try {
    await db.beginTransaction();
    // CREATE COMPANY
    let qry = `
      INSERT INTO tenants_schema.companies
      (name)
      VALUES
      (?);
      `;
    let vals = [name];
    let [rows, fields] = await db.execute(qry, vals);
    companyRows = rows;
    const companyId = rows.insertId;

    // CREATE ROLE
    qry = `
      INSERT INTO tenants_schema.roles
      (name, canBeModified, companyId )
      VALUES ('Admin', 0, ? );
    `;
    vals = [companyId];
    [rows, fields] = await db.execute(qry, vals);
    const roleId = rows.insertId;

    // CREATE TENANT COMPANY
    qry = `
      INSERT INTO tenants_schema.tenants_companies
    (tenantId, companyId, roleId)
    VALUES(?, ?, ?);
    `;
    vals = [tenantId, companyId, roleId];
    [rows, fields] = await db.execute(qry, vals);

    // UPDATE PERMISSIONS TABLE
    qry = `
    CALL tenants_schema.updatePermissions();
    `;
    [rows, fields] = await db.execute(qry);

    // ASSIGN PERMISSIONS TO ROLE
    qry = `
      INSERT INTO tenants_schema.roles_permissions
      (roleId, permissionId)
      SELECT ?, permissions.permissionId
      FROM tenants_schema.permissions
    `;
    vals = [roleId];
    [rows, fields] = await db.execute(qry, vals);

    await db.commit();
    await db.end();
    return companyRows;
  } catch (err) {
    await db.rollback();
    await db.end();
    return err;
  }
};

module.exports.getCompanyByTenantId = async (tenantId) => {
  const db = await connectDb();
  const qry = `
  SELECT 
    companies.companyId, 
    companies.name, 
    companies.dateCreated, 
    companies.dateModified
  FROM tenants_schema.companies, tenants_schema.tenants_companies
  WHERE tenants_companies.tenantId = ?
  AND tenants_companies.companyId = companies.companyId 
  `;
  const vals = [tenantId];
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  console.log(rows);
  return rows;
};

module.exports.getOneCompanyByCompanyIdAndTenantId = async (
  companyId,
  tenantId
) => {
  const db = await connectDb();
  const qry = `
  SELECT * 
  FROM companies, tenants_companies 
  WHERE companies.companyId  = tenants_companies.companyId  
  AND tenants_companies.tenantId  = ? 
  AND tenants_companies.companyId = ?
  `;
  const vals = [companyId, tenantId];
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  console.log(rows);
  return rows;
};

module.exports.updateCompany = async (newCompany) => {
  const { tenantId, companyId, name, isInactive } = newCompany;
  const db = await connectDb();
  const qry = `
  UPDATE tenants_schema.companies
  SET 
    name = ?, 
    isInactive = ? 
  WHERE companyId = ?
  `;
  const vals = [name, isInactive, companyId];
  console.log(vals);
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  console.log(rows);
  return rows;
};

module.exports.setInactiveCompany = async (companyId) => {
  const db = await connectDb();
  const qry = `
  UPDATE tenants_schema.companies
  SET isInactive = 0
  WHERE companyId=17;
  `;
  const vals = [companyId];
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  console.log(rows);
  return rows;
};

module.exports.deleteCompany = async (companyId) => {
  const db = await connectDb();
  try {
    await db.beginTransaction();
    // DELETE COMPANY
    let qry = `
      DELETE FROM tenants_schema.companies
      WHERE companyId = ?
    `;
    let vals = [companyId];
    let [rows, fields] = await db.execute(qry, vals);
    console.log(rows, 'rows');
    //
    qry = `
      DELETE FROM tenants_schema.tenants_companies
      WHERE companyId = ?
    `;
    [rows, fields] = await db.execute(qry, vals);
    // DELETE ROLE
    qry = `
      DELETE FROM tenants_schema.roles
      WHERE companyId = ?;
    `;
    [rows, fields] = await db.execute(qry, vals);
    await db.commit();
    await db.end();
    return rows;
  } catch (err) {
    await db.rollback();
    await db.end();
    return err;
  }
};
