const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpaymentheader', {
    billpaymentheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checknumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    checkamount: {
      type: DataTypes.DECIMAL(22,2),
      allowNull: false
    },
    paymentdate: {
      type: DataTypes.DATE,
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
      allowNull: true
    },
    iscleared: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "not cleared = 0, cleared = 1"
    }
  }, {
    sequelize,
    tableName: 'billpaymentheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billpaymentheaderid" },
        ]
      },
      {
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
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
        name: "accountid",
        using: "BTREE",
        fields: [
          { name: "accountid" },
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
        name: "checkamount",
        using: "BTREE",
        fields: [
          { name: "checkamount" },
        ]
      },
      {
        name: "checknumber",
        using: "BTREE",
        fields: [
          { name: "checknumber" },
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
        name: "iscleared",
        using: "BTREE",
        fields: [
          { name: "iscleared" },
        ]
      },
    ]
  });
};
