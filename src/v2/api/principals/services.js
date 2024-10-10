const { connectMasterDb } = require('../../config/db');

const getAllPrincipals = async () => {
  try {
    const qry = `SELECT * FROM principals ORDER BY name ASC`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

module.exports = {
  getAllPrincipals,
};
