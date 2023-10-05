const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoicepaymentheader', {
    invoicepaymentheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    depositaccountid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paymentamount: {
      type: DataTypes.DECIMAL(22,2),
      allowNull: false
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
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    refnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    iscleared: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    isvoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'invoicepaymentheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoicepaymentheaderid" },
        ]
      },
      {
        name: "customerid",
        using: "BTREE",
        fields: [
          { name: "customerid" },
        ]
      },
      {
        name: "depositaccountid",
        using: "BTREE",
        fields: [
          { name: "depositaccountid" },
        ]
      },
      {
        name: "memo",
        using: "BTREE",
        fields: [
          { name: "memo" },
        ]
      },
      {
        name: "referencenumber",
        using: "BTREE",
        fields: [
          { name: "refnumber" },
        ]
      },
      {
        name: "paymentdate",
        using: "BTREE",
        fields: [
          { name: "paymentdate" },
        ]
      },
      {
        name: "paymentamount",
        using: "BTREE",
        fields: [
          { name: "paymentamount" },
        ]
      },
      {
        name: "iscleared",
        using: "BTREE",
        fields: [
          { name: "iscleared" },
        ]
      },
      {
        name: "isvoid",
        using: "BTREE",
        fields: [
          { name: "isvoid" },
        ]
      },
    ]
  });
};
