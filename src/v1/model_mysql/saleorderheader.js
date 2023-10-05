const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saleorderheader', {
    saleorderheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    saleordercount: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    eodcounter: {
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
    salestatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'saleorderheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "saleorderheaderid" },
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
        name: "eodcounter",
        using: "BTREE",
        fields: [
          { name: "eodcounter" },
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
        name: "saleordercount",
        using: "BTREE",
        fields: [
          { name: "saleordercount" },
        ]
      },
    ]
  });
};
