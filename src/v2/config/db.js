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
  //const qry = `SELECT servers.serverip FROM servers WHERE servers.id = ?`;
  const qry = `SELECT zerotier_ip AS serverip FROM servers_zerotier WHERE id = ?`;
  let masterDb;

  try {
    // Connect to the master database
    masterDb = await connectMasterDb();

    // Execute the query to get the server IP
    const [rows] = await masterDb.execute(qry, [serverId]);

    // Check if a result was found
    if (rows.length === 0) {
      throw new Error(`No server found with ID: ${serverId}`);
    }

    // Close the master DB connection
    await masterDb.end();

    // Now, connect to the specific server using the found server IP
    const db = await mysql.createConnection({
      host: rows[0].serverip,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT,
      password: process.env.MYSQL_PASS,
      Promise: bluebird,
      timezone: 'local',
      dateStrings: true,
    });

    return db;
  } catch (err) {
    console.error('Error connecting to database by server ID:', err);

    // Ensure masterDb is closed even in case of an error
    if (masterDb) {
      await masterDb.end();
    }

    // Re-throw the error to handle it upstream or return null/undefined as per your logic
    // throw err;
  }
};

const connectByBackupDb = async (serverId) => {
  const qry = `SELECT servers.servername FROM servers WHERE servers.id = ?`;
  let masterDb;

  try {
    // Connect to the master database
    masterDb = await connectMasterDb();

    // Execute the query to get the server IP
    const [rows] = await masterDb.execute(qry, [serverId]);

    // Check if a result was found
    if (rows.length === 0) {
      throw new Error(`No server found with ID: ${serverId}`);
    }

    // Close the master DB connection
    await masterDb.end();
    //const backupDatabaseIp = '25.79.55.64';
    const backupDatabaseIp = '10.1.6.235';
    // Now, connect to the specific server using the found server IP
    const db = await mysql.createConnection({
      host: backupDatabaseIp,
      user: process.env.MYSQL_USER,
      database: rows[0].servername,
      port: process.env.MYSQL_PORT,
      password: process.env.MYSQL_PASS,
      Promise: bluebird,
      timezone: 'local',
      dateStrings: true,
    });

    return db;
  } catch (err) {
    console.error('Error connecting to database by server ID:', err);

    // Ensure masterDb is closed even in case of an error
    if (masterDb) {
      await masterDb.end();
    }

    // Re-throw the error to handle it upstream or return null/undefined as per your logic
    // throw err;
  }
};

// const connectDbByServerId = async (serverId) => {
//   const qry = `SELECT servers.serverip FROM servers WHERE servers.id = ?`;
//   let masterDb = await connectMasterDb();
//   const [rows, fields] = await masterDb.execute(qry, [serverId]);
//   await masterDb.end();
//   try {
//     db = await mysql.createConnection({
//       host: rows[0].serverip,
//       user: process.env.MYSQL_USER,
//       database: process.env.MYSQL_DB,
//       port: process.env.MYSQL_PORT,
//       password: process.env.MYSQL_PASS,
//       Promise: bluebird,
//       timezone: 'local',
//       dateStrings: true,
//     });
//   } catch (err) {
//     console.error(err);
//   }
//   return db;
// };

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
  connectByBackupDb,
};
