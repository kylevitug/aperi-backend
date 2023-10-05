const { Sequelize, DataTypes } = require('sequelize');

const getAllEmployees = async () => {
  const sequelize = new Sequelize(
    'mysql://user:p1y2t3h4o5n6@192.168.23.20:3306/Warehouse'
  );
  const Employees = require('../../../model_mysql/employees')(
    sequelize,
    DataTypes
  );
  await Employees.sync({ alter: true });
  const employees = await Employees.findAll();
  console.log(employees);
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
