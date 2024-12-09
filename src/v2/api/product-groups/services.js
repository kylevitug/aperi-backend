const { connectMasterDb } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');

const getAllData = async () => {
  try {
    const qry = `SELECT * FROM productgroups`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const create = async (req) => {
  let { terminaltypename } = req.body;
  try {
    let sql = ``;
    let values = [terminaltypename];
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
