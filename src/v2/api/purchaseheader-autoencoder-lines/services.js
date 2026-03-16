const { connectMasterDb } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');

const getAllData = async () => {
  let db;

  try {
    const qry = `SELECT * FROM purchaseheader_autoencoder_line ORDER BY list_id DESC`;
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

const create = async (rows) => {
  let db;
  let transactionStarted = false;

  try {
    const sql = `INSERT INTO purchaseheader_autoencoder_line (invoice_id, supplier_code, product_name, price, quantity, total, batch, expiry) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    let insertedCount = 0;

    db = await connectMasterDb();
    await db.beginTransaction();
    transactionStarted = true;

    for (const row of rows) {
      const values = convertUndefinedToNull([...row]);
      await db.execute(sql, values);
      insertedCount += 1;
    }

    await db.commit();

    return {
      message: 'Data inserted successfully',
      insertedCount,
    };
  } catch (error) {
    if (db && transactionStarted) {
      try {
        await db.rollback();
      } catch (rollbackError) {
        console.error('Rollback error ', rollbackError);
      }
    }

    console.error('Error ', error);
    throw error;
  } finally {
    if (db) {
      await db.end();
    }
  }
};

module.exports = {
  getAllData,
  create,
};
