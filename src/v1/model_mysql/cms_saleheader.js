const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_saleheader', {
    trxid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branchid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cardnumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    clerkid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cashierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eodcounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sessioncounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalsale: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    totaldisc: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    totalpayment: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    totalchange: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    paymentmodeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    returnstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    points: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cms_saleheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trxid" },
        ]
      },
      {
        name: "eodcounter",
        using: "BTREE",
        fields: [
          { name: "eodcounter" },
          { name: "sessioncounter" },
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
        name: "clerkid",
        using: "BTREE",
        fields: [
          { name: "clerkid" },
        ]
      },
      {
        name: "cashierid",
        using: "BTREE",
        fields: [
          { name: "cashierid" },
        ]
      },
      {
        name: "sessioncounter",
        using: "BTREE",
        fields: [
          { name: "sessioncounter" },
        ]
      },
      {
        name: "paymentmodeid",
        using: "BTREE",
        fields: [
          { name: "paymentmodeid" },
        ]
      },
      {
        name: "returnstatus",
        using: "BTREE",
        fields: [
          { name: "returnstatus" },
        ]
      },
      {
        name: "trxtype",
        using: "BTREE",
        fields: [
          { name: "points" },
        ]
      },
      {
        name: "branchid",
        using: "BTREE",
        fields: [
          { name: "branchid" },
        ]
      },
      {
        name: "cardnumber",
        using: "BTREE",
        fields: [
          { name: "cardnumber" },
        ]
      },
    ]
  });
};
