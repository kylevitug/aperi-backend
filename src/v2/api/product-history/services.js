const { connectMasterDb, connectDbByServerId } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');
const { itemReportQuery } = require('./queries');

const getDataById = async (req) => {
  const { serverid, startdate, enddate } = req.body;
  const { id } = req.params;
  let productid = id;
  try {
    let sql = itemReportQuery();
    let values = [
      startdate,
      enddate,
      productid,
      startdate,
      enddate,
      productid,
      startdate,
      enddate,
      productid,
      startdate,
      enddate,
      productid,
      startdate,
      enddate,
      productid,
      startdate,
      enddate,
      productid,
    ];
    const db = await connectDbByServerId(serverid);
    const [rows, fields] = await db.execute(sql, values);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
    return error;
  }
};

const getAllData = async () => {
  try {
    const qry = itemReportQuery();
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
  getDataById,
  getAllData,
  create,
  updateById,
  deleteById,
};
