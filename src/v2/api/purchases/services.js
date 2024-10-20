const { connectDbByServerId } = require('../../config/db');

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

const getLastPurchaseByPrincipalNameByServerId = async (serverId, principalName) => {
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
}

module.exports = {
  getLastThreeByPrincipalName,
  getLastPurchaseByPrincipalNameByServerId
};
