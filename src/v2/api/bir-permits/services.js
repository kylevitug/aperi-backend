const { connectMasterDb } = require('../../config/db');
const convertUndefinedToNull = require('../../utilities/convertUndefinedToNull');

const getAllBirPermits = async () => {
  try {
    const qry = `SELECT * FROM terminals2 WHERE 1`;
    const db = await connectMasterDb();
    const [rows, fields] = await db.execute(qry);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const createBirPermit = async (req) => {
  let {
    proprietorname,
    businessname,
    address,
    tinnumber,
    terminaltypeid,
    brandname,
    modelname,
    serialno,
    permitno,
    softwarename,
    minnumber,
    serverid,
    localterminalid,
    iscancelled,
    isactivedb,
  } = req.body;
  try {
    let sql = `INSERT INTO terminals2 (
        proprietorname, businessname,
        address, tinnumber, terminaltypeid,
        brandname, modelname, serialno,
        permitno, softwarename, minnumber,
        serverid, localterminalid, iscancelled,
        isactivedb)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let values = [
      proprietorname,
      businessname,
      address,
      tinnumber,
      terminaltypeid,
      brandname,
      modelname,
      serialno,
      permitno,
      softwarename,
      minnumber,
      serverid,
      localterminalid,
      iscancelled,
      isactivedb,
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

const updateBirPermit = async (req) => {
  let {
    terminalid,
    proprietorname,
    businessname,
    address,
    tinnumber,
    terminaltypeid,
    brandname,
    modelname,
    serialno,
    permitno,
    softwarename,
    minnumber,
    serverid,
    localterminalid,
    iscancelled,
    isactivedb,
  } = req.body;
  try {
    let sql = `UPDATE terminals2 SET 
        proprietorname = ?, businessname = ?,
        address = ?, tinnumber = ?, terminaltypeid = ?,
        brandname = ?, modelname = ?, serialno = ?,
        permitno = ?, softwarename = ?, minnumber = ?,
        serverid = ?, localterminalid = ?, iscancelled = ?,
        isactivedb = ? WHERE terminalid = ?`;
    let values = [
      proprietorname,
      businessname,
      address,
      tinnumber,
      terminaltypeid,
      brandname,
      modelname,
      serialno,
      permitno,
      softwarename,
      minnumber,
      serverid,
      localterminalid,
      iscancelled,
      isactivedb,
      terminalid,
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

const deleteBirPermit = async (req) => {
  try {
    let sql = `DELETE FROM terminals2 WHERE terminalid = ?`;
    let values = [req.terminalid];
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
  getAllBirPermits,
  createBirPermit,
  updateBirPermit,
  deleteBirPermit,
};