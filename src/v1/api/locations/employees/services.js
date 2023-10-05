const { Sequelize, DataTypes } = require('sequelize');

const getAllEmployees = async () => {
  const sequelize = new Sequelize('Warehouse', 'user', 'p1y2t3h4o5n6', {
    host: '25.79.55.64',
    dialect: 'mysql',
  });
  const Employees = require('../../../model_mysql/employees')(
    sequelize,
    DataTypes
  );
  // await Employees.sync({ alter: true });
  const employees = await Employees.findAll();
  return employees;
};

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = {
  getAllEmployees,
};
