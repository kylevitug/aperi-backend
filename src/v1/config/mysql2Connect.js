// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// module.exports = connectDB;

const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
const connectDb = async () => {
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
    throw err;
    console.error(err);
  }
  return db;
};
module.exports = connectDb;
