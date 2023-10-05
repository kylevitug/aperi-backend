const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('received_and_adjusted', {
    inventoryinheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inventoryadjustid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trxtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trxref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'received_and_adjusted',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryinheaderid" },
          { name: "serverid" },
          { name: "inventoryadjustid" },
        ]
      },
      {
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
      {
        name: "trxtype",
        using: "BTREE",
        fields: [
          { name: "trxtype" },
        ]
      },
      {
        name: "trxref",
        using: "BTREE",
        fields: [
          { name: "trxref" },
        ]
      },
      {
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
    ]
  });
};
