const bcrypt = require('bcrypt');
const connectDb = require('../../../config/mysql2Connect');

const comparePassword = async (tenant, password) => {
  const match = await bcrypt.compare(password, tenant.password);
  if (match) {
    return true;
  } else {
    return false;
  }
};

const deleteAllRefreshTokensByTenantId = async (tenantId) => {
  const qry = `
  DELETE FROM tenants_schema.refresh_tokens 
  WHERE tenantId = ?;
  `;
  const vals = [tenantId];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};

const deleteRefreshTokensByRefreshToken = async (refreshToken) => {
  const qry = `
  DELETE FROM tenants_schema.refresh_tokens 
  WHERE refreshTokens = ?;
  `;
  const vals = [refreshToken];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};

const getRefreshTokensByRefreshToken = async (refreshToken) => {
  const qry = `
  SELECT 
    id, tenantId, refreshTokens, dateCreated, dateModified
  FROM tenants_schema.refresh_tokens
  WHERE refreshTokens = ?
  `;
  const vals = [refreshToken];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  console.log(rows);
  return rows;
};

const createNewRefreshToken = async (newRefreshToken) => {
  const qry = `
  INSERT INTO
    tenants_schema.refresh_tokens( tenantId, refreshTokens )
    VALUES
    (?, ?);
    `;
  const vals = [newRefreshToken.tenantId, newRefreshToken.refreshToken];
  const db = await connectDb();
  const [rows, fields] = await db.execute(qry, vals);
  await db.end();
  return rows;
};

module.exports = {
  comparePassword,
  getRefreshTokensByRefreshToken,
  deleteAllRefreshTokensByTenantId,
  deleteRefreshTokensByRefreshToken,
  createNewRefreshToken,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};
