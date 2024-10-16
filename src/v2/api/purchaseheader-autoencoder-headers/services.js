const { connectMasterDb } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');

const getAllData = async () => {
  try {
    const qry = `SELECT invoice_id 
        FROM purchaseheader_autoencoder_header`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const create = async (req) => {
  try {
    const jsonArray = req.body; // Expecting req.body to be an array like the one you've provided

    const db = await connectMasterDb(); // Open DB connection here to reuse

    // Iterate through each item in the JSON array
    jsonArray.forEach(async (item) => {
      const tags = item[0]; // First element (e.g., 'Zuellig')
      const invoice_id = item[1]; // Second element (e.g., '1513355979')

      // Construct your SQL query with placeholders
      let sql = `INSERT IGNORE INTO purchaseheader_autoencoder_header (invoice_id, tags, hide) VALUES (?, ?, ?);`;
      let values = [invoice_id, tags, 0]; // Adjust values to fit your table structure

      // Execute the SQL query
      const [rows, fields] = await db.execute(sql, values);
    });

    await db.end(); // Close the DB connection after iteration completes
    return { message: 'Data inserted successfully' };
  } catch (error) {
    console.error('Error', error);
    return { error: error.message };
  }
};

// const create = async (req) => {
//   // let { terminaltypename } = req.body;
//   jsonArray.forEach((req.body) => {
//     const name = item[0]; // First element
//     const timestamp = item[1]; // Second element

//     console.log(`Name: ${name}, Timestamp: ${timestamp}`);
//   });

//   try {
//     let sql = `INSERT IGNORE INTO `purchaseheader_autoencoder_header` (`invoice_id`, `tags`, `hide`) VALUES (%s, %s, %s);`;
//     let values = [terminaltypename];
//     values = convertUndefinedToNull(values);
//     const db = await connectMasterDb();
//     const [rows, fields] = await db.execute(sql, values);
//     await db.end();
//     return rows;
//   } catch (error) {
//     console.error('Error ', error);
//     return error;
//   }
// };

const updateById = async (req) => {
  let { terminaltypeid, terminaltypename } = req.body;
  try {
    let sql = `UPDATE terminaltypes SET terminaltypename = ? WHERE terminaltypeid = ?`;
    let values = [terminaltypename, terminaltypeid];
    values = convertUndefinedToNull(values);
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(sql, values);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
    return error;
  }
};

const deleteById = async (req) => {
  try {
    let sql = `DELETE FROM terminaltypes WHERE terminaltypeid = ?`;
    let values = [req.terminaltypeid];
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(sql, values);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
    return error;
  }
};

module.exports = {
  getAllData,
  create,
  updateById,
  deleteById,
};
