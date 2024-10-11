const { connectMasterDb } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');

const getAllSupplierProductCodes = async () => {
  try {
    const qry = `SELECT * FROM productsrefsap_sapcodes`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const createSupplierProductCode = async (req) => {
  try {
    let sql = `INSERT INTO productsrefsap_sapcodes (sapcode, principal_name, product_name, list_price) 
      VALUES (?, ?, ?, ?)`;
    let values = [
      req.sapcode,
      req.principal_name,
      req.product_name,
      req.list_price,
    ];
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

const updateSupplierProductCode = async (req) => {
  try {
    let sql = `UPDATE productsrefsap_sapcodes SET sapcode = ?, principal_name = ?, product_name = ?, list_price = ? WHERE sapcode = ? AND product_name = ?`;
    let values = [
      req.new_sapcode,
      req.principal_name,
      req.new_product_name,
      req.list_price,
      req.sapcode,
      req.product_name,
    ];
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

const deleteSupplierProductCode = async (req) => {
  try {
    let sql = `DELETE FROM productsrefsap_sapcodes WHERE sapcode = ? AND product_name = ?`;
    let values = [req.sapcode, req.product_name];
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
  getAllSupplierProductCodes,
  createSupplierProductCode,
  updateSupplierProductCode,
  deleteSupplierProductCode,
};
