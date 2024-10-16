const itemReportQuery = () => {
  const query = `SELECT 
    'Purchase' AS trxtype, 
    purchaseheader.deliverydate as datecreated, 
    products.name, 
    purchaseline.buyprice, 
    purchaseline.quantity, 
    purchaseline.uom, 
    purchaseline.total ,
    purchaseheader.purchaseheaderid AS trxid
FROM 
    purchaseheader, products, purchaseline 
WHERE purchaseheader.purchaseheaderid = purchaseline.purchaseheaderid 
AND purchaseline.productid = products.productid 
AND purchaseheader.isreceived = 1 AND
DATE(deliverydate) BETWEEN ? AND ? 
AND products.productid = ?

UNION ALL
SELECT 
    'Sale' AS trxtype,
    DATE(saleheader.datecreated) as datecreated, 
    products.name, 
    COALESCE(SUM(saleline.amount)/SUM(saleline.total),0.0), 
    SUM(saleline.total*-1), 
    'pc', 
    SUM(saleline.total*-1) as total,
    '' AS trxid
FROM 
    saleheader, saleline, products 
WHERE saleheader.saleheaderid = saleline.saleheaderid 
AND saleline.itemid = products.productid
AND DATE(datecreated) BETWEEN ? AND ? 
AND products.productid = ?
GROUP BY DATE(saleheader.datecreated)

UNION ALL
SELECT 
    'Adjust' AS trxtype, 
    DATE(inventoryadjustheader.adjustdate) as datecreated, 
    products.name, 
    inventoryadjustline.buyprice, 
    inventoryadjustline.total, 
    'pc', 
    inventoryadjustline.total,
    inventoryadjustheader.inventoryadjustid AS trxid
FROM 
    inventoryadjustheader, inventoryadjustline, products 
WHERE inventoryadjustheader.inventoryadjustid = inventoryadjustline.inventoryadjustid 
AND inventoryadjustline.productid = products.productid 
AND DATE(adjustdate) BETWEEN ? AND ? 
AND products.productid = ? 

UNION ALL
SELECT 
    'Outgoing' AS trxtype, 
    DATE(inventoryoutheader.transferdate) as datecreated, 
    products.name, 
    inventoryoutline.buyprice, 
    inventoryoutline.total*-1, 
    'pc', 
    inventoryoutline.total*-1,
    inventoryoutheader.inventoryoutid AS trxid
FROM 
    inventoryoutheader, inventoryoutline, products 
WHERE inventoryoutheader.inventoryoutid = inventoryoutline.inventoryoutheaderid 
AND inventoryoutline.productid = products.productid
AND DATE(transferdate) BETWEEN ? AND ? 
AND products.productid = ? 

UNION ALL
SELECT 
    'Ingoing' AS trxtype, 
    DATE(inventoryinheader.transferdate) as datecreated, 
    products.name, 
    inventoryinline.buyprice, 
    inventoryinline.total, 
    'pc', 
    inventoryinline.total,
    inventoryinheader.inventoryinid AS trxid
FROM 
    inventoryinheader, inventoryinline, products 
WHERE inventoryinheader.inventoryinid = inventoryinline.inventoryinheaderid 
AND inventoryinline.productid = products.productid 
AND inventoryinheader.isreceived = 1
AND DATE(transferdate) BETWEEN ? AND ? 
AND products.productid = ? 

UNION ALL
SELECT 
    'Return' AS trxtype,
    DATE(returnheader.datecreated) as datecreated, 
    products.name, 
    (returnline.amount/returnline.total), 
    SUM(returnline.total), 
    'pc', 
    SUM(returnline.total) as total,
    '' AS trxid
FROM 
    returnheader, returnline, products 
WHERE returnheader.returnheaderid = returnline.returnheaderid 
AND returnline.itemid = products.productid
AND DATE(datecreated) BETWEEN ? AND ? 
AND products.productid = ? 
GROUP BY DATE(returnheader.datecreated)
ORDER BY DATE(datecreated) ASC, trxid ASC`;
  return query;
};

module.exports = {
  itemReportQuery,
};
