const Sequelize = require('sequelize');

const initDb = () => {
  const sequelize = new Sequelize(
    process.env.SEQUELIZE_TENANT_DB_NAME,
    process.env.SEQUELIZE_TENANT_DB_USER,
    process.env.SEQUELIZE_TENANT_DB_PASS,
    {
      host: process.env.SEQUELIZE_TENANT_DB_HOST,
      dialect: process.env.SEQUELIZE_TENANT_DB_DIALECT,
      timezone: process.env.SEQEULIZE_TENANT_DB_TIMEZONE,
    }
  );
  return sequelize;
};

module.exports = initDb;
