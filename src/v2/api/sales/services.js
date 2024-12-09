const { connectDbByServerId, connectByBackupDb } = require('../../config/db');

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
  let { productGroupName, serverId, startDate } = req.query;
  try {
    const sql = `
      SELECT 
        CONCAT(
          YEAR(t.datecreated), 
          '-', 
          LPAD(
            MONTH(t.datecreated), 
            2, 
            '0'
          )
        ) AS yearmonth, 
        SUM(t.tot) AS total_amount 
      FROM 
        (
          -- Sales transactions
          SELECT 
            saleheader.datecreated, 
            SUM(saleline.amount) AS tot 
          FROM 
            saleheader 
            INNER JOIN saleline ON saleheader.saleheaderid = saleline.saleheaderid 
          WHERE 
            saleheader.paymentmodeid NOT IN (9, 10) 
            AND saleline.itemid IN (
              SELECT 
                productgroupsitems.productid 
              FROM 
                productgroups 
                INNER JOIN productgroupsitems ON productgroups.id = productgroupsitems.productgroupid 
              WHERE 
                productgroups.name LIKE ?
            ) 
            AND saleheader.datecreated BETWEEN ?
            AND CURDATE() 
          GROUP BY 
            saleheader.datecreated 
          UNION ALL 
            -- Return transactions (as negative amounts)
          SELECT 
            returnheader.datecreated, 
            SUM(returnline.amount) * -1.0 AS tot 
          FROM 
            returnheader 
            INNER JOIN returnline ON returnheader.returnheaderid = returnline.returnheaderid 
          WHERE 
            returnheader.paymentmodeid NOT IN (9, 10) 
            AND returnline.itemid IN (
              SELECT 
                productgroupsitems.productid 
              FROM 
                productgroups 
                INNER JOIN productgroupsitems ON productgroups.id = productgroupsitems.productgroupid 
              WHERE 
                productgroups.name LIKE ?
            ) 
            AND returnheader.datecreated BETWEEN ?
            AND CURDATE() 
          GROUP BY 
            returnheader.datecreated
        ) AS t 
      GROUP BY 
        yearmonth
      ORDER BY 
        yearmonth`;
    console.log(serverId);
    const db = await connectByBackupDb(serverId);
    const [rows, fields] = await db.execute(sql, [
      productGroupName,
      startDate,
      productGroupName,
      startDate,
    ]);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

module.exports = {
  getAllSales,
  getAllSalesByProductGroupNameByDateByServerId,
};
