const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saleheader', {
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    }
  }, {
    sequelize,
    tableName: 'saleheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "saleheaderid" },
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
        name: "memo",
        using: "BTREE",
        fields: [
          { name: "memo" },
        ]
      },
    ]
  });
};
