const { connectMasterDb } = require('../../config/db');

const getSupplierEncoderCredentials = async () => {
  let db;

  try {
    const qry = `
      SELECT
        suppliers.name AS supplier_name,
        supplier_encoder_credentials.username,
        supplier_encoder_credentials.password
      FROM supplier_encoder_credentials
      INNER JOIN suppliers
        ON suppliers.supplierid = supplier_encoder_credentials.supplierid
      ORDER BY suppliers.name ASC
    `;

    db = await connectMasterDb();
    const [rows] = await db.execute(qry);
    return rows;
  } catch (error) {
    console.error('Error ', error);
    throw error;
  } finally {
    if (db) {
      await db.end();
    }
  }
};

module.exports = {
  getSupplierEncoderCredentials,
};
