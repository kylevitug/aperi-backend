const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_masterlist', {
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branchassigned: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employeename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "employeename"
    },
    datehired: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sssnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    contactnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    philhealthnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    banknumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    pagibignumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    position: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    tin: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    monthlyrate: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    dailyrate: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    isinactive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    incentiverate: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 10.00
    }
  }, {
    sequelize,
    tableName: 'employee_masterlist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "employeename",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeename" },
        ]
      },
      {
        name: "branchassigned",
        using: "BTREE",
        fields: [
          { name: "branchassigned" },
        ]
      },
      {
        name: "monthlyrate",
        using: "BTREE",
        fields: [
          { name: "monthlyrate" },
        ]
      },
      {
        name: "dailyrate",
        using: "BTREE",
        fields: [
          { name: "dailyrate" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
      {
        name: "isinactive",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
      {
        name: "rate",
        using: "BTREE",
        fields: [
          { name: "incentiverate" },
        ]
      },
    ]
  });
};
