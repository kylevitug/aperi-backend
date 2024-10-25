const { connectMasterDb, connectDbByServerId } = require('../../config/db');

const getLastThreeByPrincipalName = async (serverId, principalName) => {
  try {
    const qry = `SELECT suppliers.name,
        purchasedate
        FROM \`purchaseline\`,
        \`purchaseheader\`,
        suppliers
        WHERE purchaseheader.purchaseheaderid = purchaseline.purchaseheaderid
        AND purchaseline.productid IN (
            SELECT products.productid
            FROM products
            WHERE products.principalid = (
                SELECT principalid
                FROM \`principals\`
                WHERE name = ?
            )
        )
        AND purchaseheader.isreceived = 1
        AND suppliers.supplierid = purchaseheader.supplierid
        GROUP BY purchaseheader.purchaseheaderid
        ORDER BY purchasedate DESC
        LIMIT 3`;
    const db = await connectDbByServerId(serverId);
    const [rows, fields] = await db.execute(qry, [principalName]);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const getLastPurchaseByPrincipalNameByServerId = async (
  serverId,
  principalName
) => {
  try {
    const qry = `SELECT 
        purchasedate
        FROM \`purchaseline\`,
        \`purchaseheader\`,
        suppliers
        WHERE purchaseheader.purchaseheaderid = purchaseline.purchaseheaderid
        AND purchaseline.productid IN (
            SELECT products.productid
            FROM products
            WHERE products.principalid = (
                SELECT principalid
                FROM \`principals\`
                WHERE name = ?
            )
        )
        AND purchaseheader.isreceived = 1
        AND suppliers.supplierid = purchaseheader.supplierid
        GROUP BY purchaseheader.purchaseheaderid
        ORDER BY purchasedate DESC
        LIMIT 1`;
    const db = await connectDbByServerId(serverId);
    const [rows, fields] = await db.execute(qry, [principalName]);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

const getAllPurchaseHeaders = async (filters = {}) => {
  try {
    let sql = `SELECT * FROM purchaseheader WHERE 1=1`; // Base query
    let values = [];

    // Dynamically add filters based on the fields provided in the request
    if (filters.purchaseheaderid) {
      sql += ` AND purchaseheaderid = ?`;
      values.push(filters.purchaseheaderid);
    }
    // Handle purchasedate with start and end date range
    if (filters.purchasedate_start && filters.purchasedate_end) {
      sql += ` AND purchasedate BETWEEN ? AND ?`;
      values.push(filters.purchasedate_start, filters.purchasedate_end);
    } else if (filters.purchasedate_start) {
      sql += ` AND purchasedate >= ?`;
      values.push(filters.purchasedate_start);
    } else if (filters.purchasedate_end) {
      sql += ` AND purchasedate <= ?`;
      values.push(filters.purchasedate_end);
    }

    if (filters.supplierid) {
      sql += ` AND supplierid = ?`;
      values.push(filters.supplierid);
    }
    if (filters.refnumber) {
      sql += ` AND refnumber = ?`;
      values.push(filters.refnumber);
    }
    if (filters.memo) {
      sql += ` AND memo = ?`;
      values.push(filters.memo);
    }
    if (filters.total) {
      sql += ` AND total = ?`;
      values.push(filters.total);
    }
    if (filters.employeeid) {
      sql += ` AND employeeid = ?`;
      values.push(filters.employeeid);
    }
    if (filters.isreceived) {
      sql += ` AND isreceived = ?`;
      values.push(filters.isreceived);
    }
    if (filters.datecreated) {
      sql += ` AND datecreated = ?`;
      values.push(filters.datecreated);
    }
    if (filters.datemodified) {
      sql += ` AND datemodified = ?`;
      values.push(filters.datemodified);
    }
    if (filters.deliverydate) {
      sql += ` AND deliverydate = ?`;
      values.push(filters.deliverydate);
    }
    if (filters.supplierclassid) {
      sql += ` AND supplierclassid = ?`;
      values.push(filters.supplierclassid);
    }
    if (filters.billedstatus) {
      sql += ` AND billedstatus = ?`;
      values.push(filters.billedstatus);
    }

    // Execute the query
    const db = await connectDbByServerId(filters.serverId);
    const [rows] = await db.execute(sql, values);
    await db.end();

    return rows;
  } catch (error) {
    console.error('Error ', error);
    throw error;
  }
};

module.exports = {
  getLastThreeByPrincipalName,
  getLastPurchaseByPrincipalNameByServerId,
  getAllPurchaseHeaders,
};
