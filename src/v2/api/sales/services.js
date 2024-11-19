const { connectDbByServerId } = require('../../config/db');

const getAllSales = async (req, res) => {
  let { productid, serverid, startdate, enddate } = req.body;
  try {
    const sql = `
      SELECT
        DATE(saleheader.datecreated) AS datecreated,
        SUM(saleline.total) AS total
      FROM saleheader, saleline
      WHERE saleheader.saleheaderid = saleline.saleheaderid
      AND saleline.itemid = ?
      AND DATE(saleheader.datecreated) BETWEEN ? AND ?
      GROUP BY DATE(saleheader.datecreated)`;
    const db = await connectDbByServerId(serverid);
    const [rows, fields] = await db.execute(sql, [
      productid,
      startdate,
      enddate,
    ]);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const getAllSalesByProductGroupNameByDateByServerId = async (req, res) => {
  let { productgroupid, serverid, startdate, enddate } = req.body;
  try {
    const sql = `
      SELECT
        DATE(saleheader.datecreated) AS datecreated,
        SUM(saleline.total) AS total
      FROM saleheader, saleline, item
      WHERE saleheader.saleheaderid = saleline.saleheaderid
      AND saleline.itemid = item.itemid
      AND item.productgroupid = ?
      AND DATE(saleheader.datecreated) BETWEEN ? AND ?
      GROUP BY DATE(saleheader.datecreated)`;
    const db = await connectDbByServerId(serverid);
    const [rows, fields] = await db.execute(sql, [
      productgroupid,
      startdate,
      enddate,
    ]);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
}

module.exports = {
  getAllSales,
};
