const { connectMasterDb } = require('../../config/db');

const getAllServers = async () => {
  try {
    const qry = `SELECT * FROM servers ORDER BY servername ASC`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

module.exports = {
  getAllServers,
};
