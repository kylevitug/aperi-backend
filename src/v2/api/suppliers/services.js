const { connectMasterDb } = require('../../config/db');

const getAllSuppliers = async () => {
  try {
    const qry = `SELECT * FROM suppliers ORDER BY name ASC`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

module.exports = {
  getAllSuppliers,
};
