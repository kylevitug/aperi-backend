const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
// const connectDb = require('./mysql2Connect');
// Function to create a connection pool for a specific database

const connectMasterDb = async () => {
  let db;
  try {
    db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT,
      password: process.env.MYSQL_PASS,
      Promise: bluebird,
    });
  } catch (err) {
    console.error(err);
  }
  return db;
};

const connectDbByServerId = async (serverId) => {
  const qry = `SELECT servers.serverip FROM servers WHERE servers.id = ?`;
  let masterDb = await connectMasterDb();
  const [rows, fields] = await masterDb.execute(qry, [serverId]);
  await masterDb.end();
  try {
    db = await mysql.createConnection({
      host: rows[0].serverip,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT,
      password: process.env.MYSQL_PASS,
      Promise: bluebird,
      timezone: 'local',
      dateStrings: true,
    });
  } catch (err) {
    console.error(err);
  }
  return db;
};

// async function getDatabaseConnection(hostIp) {
//   return mysql.createPool({
//     host: hostIp,
//     user: process.env.MYSQL_USER,
//     database: process.env.MYSQL_DB,
//     port: process.env.MYSQL_PORT,
//     password: process.env.MYSQL_PASS,
//     Promise: bluebird,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//   });
// }

// async function getDatabaseConnectionByServerId(serverId) {
//   const qry = `SELECT servers.serverip FROM servers WHERE servers.id = ?`;
//   const db = await connectDb();
//   const [rows, fields] = await db.execute(qry, [serverId]);
//   await db.end();
//   console.log(rows);
//   // return rows;

//   return mysql.createPool({
//     host: rows[0].serverip,
//     user: process.env.MYSQL_USER,
//     database: process.env.MYSQL_DB,
//     port: process.env.MYSQL_PORT,
//     password: process.env.MYSQL_PASS,
//     Promise: bluebird,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//   });
// }

module.exports = {
  connectMasterDb,
  connectDbByServerId,
};
