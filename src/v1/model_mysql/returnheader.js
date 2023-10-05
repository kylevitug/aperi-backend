const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('returnheader', {
    returnheaderid: {
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
      defaultValue: "0000-00-00 00:00:00"
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
    managerid: {
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
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalreturn: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    totaldiscreturn: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    paymentmodeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'returnheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "returnheaderid" },
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
        name: "managerid",
        using: "BTREE",
        fields: [
          { name: "managerid" },
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
        name: "saleheaderid",
        using: "BTREE",
        fields: [
          { name: "saleheaderid" },
        ]
      },
    ]
  });
};
