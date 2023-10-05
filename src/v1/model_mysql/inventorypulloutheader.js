const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventorypulloutheader', {
    inventorypulloutid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pulloutdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    referenceno: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "encoder"
    },
    total: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false
    },
    isvoid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    isacknowledged: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    acknowledgedby: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    acknowledgeddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inventoryadjustid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isapproved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    approvedby: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    approveddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    totalapproved: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    totaldenied: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ispickedup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pickupby: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pickupdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'inventorypulloutheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventorypulloutid" },
        ]
      },
      {
        name: "isacknowledged",
        using: "BTREE",
        fields: [
          { name: "isacknowledged" },
        ]
      },
      {
        name: "supplierid",
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
      {
        name: "isvoid",
        using: "BTREE",
        fields: [
          { name: "isvoid" },
        ]
      },
      {
        name: "inventoryadjustid",
        using: "BTREE",
        fields: [
          { name: "inventoryadjustid" },
        ]
      },
      {
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
        ]
      },
      {
        name: "isapproved",
        using: "BTREE",
        fields: [
          { name: "isapproved" },
        ]
      },
      {
        name: "approvedby",
        using: "BTREE",
        fields: [
          { name: "approvedby" },
        ]
      },
      {
        name: "approveddate",
        using: "BTREE",
        fields: [
          { name: "approveddate" },
        ]
      },
      {
        name: "totalapproved",
        using: "BTREE",
        fields: [
          { name: "totalapproved" },
        ]
      },
      {
        name: "totaldenied",
        using: "BTREE",
        fields: [
          { name: "totaldenied" },
        ]
      },
      {
        name: "ispickedup",
        using: "BTREE",
        fields: [
          { name: "ispickedup" },
        ]
      },
      {
        name: "pickupby",
        using: "BTREE",
        fields: [
          { name: "pickupby" },
        ]
      },
      {
        name: "pickupdate",
        using: "BTREE",
        fields: [
          { name: "pickupdate" },
        ]
      },
    ]
  });
};
