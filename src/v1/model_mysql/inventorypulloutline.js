const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventorypulloutline', {
    inventorypulloutid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    batchlot: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    expdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cost: {
      type: DataTypes.DECIMAL(16,7),
      allowNull: false
    },
    totalamt: {
      type: DataTypes.DECIMAL(16,7),
      allowNull: false
    },
    isapproved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0=pending,1=approved,2=denied"
    },
    lineid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    approvedqty: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    deniedqty: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    trxtypeapproved: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1=cm,2=invoice,3=stockreplace(ia)"
    },
    trxrefapproved: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    trxtypedenied: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    tryrefdenied: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventorypulloutline',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lineid" },
        ]
      },
      {
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "batchlot",
        using: "BTREE",
        fields: [
          { name: "batchlot" },
        ]
      },
      {
        name: "expdate",
        using: "BTREE",
        fields: [
          { name: "expdate" },
        ]
      },
      {
        name: "inventorypulloutid",
        using: "BTREE",
        fields: [
          { name: "inventorypulloutid" },
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
        name: "totalamt",
        using: "BTREE",
        fields: [
          { name: "totalamt" },
        ]
      },
      {
        name: "approvedqty",
        using: "BTREE",
        fields: [
          { name: "approvedqty" },
        ]
      },
      {
        name: "deniedqty",
        using: "BTREE",
        fields: [
          { name: "deniedqty" },
        ]
      },
      {
        name: "trxtype",
        using: "BTREE",
        fields: [
          { name: "trxtypeapproved" },
        ]
      },
      {
        name: "trxreferenceid",
        using: "BTREE",
        fields: [
          { name: "trxrefapproved" },
        ]
      },
      {
        name: "trxtypedenied",
        using: "BTREE",
        fields: [
          { name: "trxtypedenied" },
        ]
      },
      {
        name: "tryrefdenied",
        using: "BTREE",
        fields: [
          { name: "tryrefdenied" },
        ]
      },
    ]
  });
};
