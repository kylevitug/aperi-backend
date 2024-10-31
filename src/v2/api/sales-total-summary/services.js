const { connectDbByServerId } = require('../../config/db');
const { getAllServers } = require('../servers/services');
const { connectMasterDb } = require('../../config/db');
const { connectByBackupDb } = require('../../config/db');

async function getAggregatedDataByServerIds(serverIds, startDate, endDate) {
  if (!Array.isArray(serverIds) || serverIds.length === 0) {
    throw new Error('serverIds should be a non-empty array');
  }

  try {
    const db = await connectMasterDb(); // Connect to the main database
    const placeholders = serverIds.map(() => '?').join(','); // Generate placeholders for each serverId
    const query = `
      SELECT * FROM aggregated_totalsummary
      WHERE serverid IN (${placeholders})
      AND DATE(datemodified) BETWEEN ? AND ?
    `;

    // Combine serverIds with startDate and endDate for query parameters
    const queryParams = [...serverIds, startDate, endDate];
    const [rows] = await db.query(query, queryParams);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
}

async function aggregateDataDaily() {
  try {
    const servers = await getAllServers();

    // Array to hold all data fetched from each server's database
    let allData = [];

    // Loop through each server to connect and fetch data
    for (const server of servers) {
      const db = await connectByBackupDb(server.id);
      const [serverData] = await db.query('SELECT * FROM totalsummary WHERE 1');
      const serverDataWithId = serverData.map((record) => ({
        ...record,
        serverid: server.id, // Add server id to each record
      }));
      // allData = [...allData, ...serverDataWithId];
      await db.end(); // Close the connection after use

      const insertQuery = `
        INSERT INTO aggregated_totalsummary (
            serverid, id, locationcreated, datemodified, previous, current,
            grosssales, returncount, returns, discounts, netsales, paidoutcount,
            paidouts, cashfordeposit, cashdeposited, overshort, trxcount
        )
        VALUES ?
        ON DUPLICATE KEY UPDATE
            locationcreated = VALUES(locationcreated),
            datemodified = VALUES(datemodified),
            previous = VALUES(previous),
            current = VALUES(current),
            grosssales = VALUES(grosssales),
            returncount = VALUES(returncount),
            returns = VALUES(returns),
            discounts = VALUES(discounts),
            netsales = VALUES(netsales),
            paidoutcount = VALUES(paidoutcount),
            paidouts = VALUES(paidouts),
            cashfordeposit = VALUES(cashfordeposit),
            cashdeposited = VALUES(cashdeposited),
            overshort = VALUES(overshort),
            trxcount = VALUES(trxcount)
    `;

      const values = serverDataWithId.map((record) => [
        record.serverid,
        record.id,
        record.locationcreated,
        record.datemodified,
        record.previous,
        record.current,
        record.grosssales,
        record.returncount,
        record.returns,
        record.discounts,
        record.netsales,
        record.paidoutcount,
        record.paidouts,
        record.cashfordeposit,
        record.cashdeposited,
        record.overshort,
        record.trxcount,
      ]);
      console.log(values);
      const aggregatedDb = await connectMasterDb();
      await aggregatedDb.query(insertQuery, [values]);
      console.log('Aggregation completed successfully');
    }
  } catch (error) {
    console.error('Error in aggregation:', error);
  }
}

module.exports = { aggregateDataDaily, getAggregatedDataByServerIds };
