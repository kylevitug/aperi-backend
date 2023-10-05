const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'employees',
    {
      employeeid: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'name',
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'password',
      },
      managerstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      employeelevelid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      datecreated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      datemodified: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      isinactive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'employees',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'employeeid' }],
        },
        {
          name: 'name',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'name' }],
        },
        {
          name: 'password',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'password' }],
        },
        {
          name: 'employeelevels_fk',
          using: 'BTREE',
          fields: [{ name: 'employeelevelid' }],
        },
      ],
    }
  );
};
