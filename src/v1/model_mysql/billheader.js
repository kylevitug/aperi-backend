const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billheader', {
    billheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isreceived: {
      type: DataTypes.BOOLEAN,
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
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paymentstatus: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    purchaserefid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    purchaseserver: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    billtype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'billheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billheaderid" },
        ]
      },
      {
        name: "isreceived",
        using: "BTREE",
        fields: [
          { name: "isreceived" },
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
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "billedstatus",
        using: "BTREE",
        fields: [
          { name: "paymentstatus" },
        ]
      },
      {
        name: "billdate",
        using: "BTREE",
        fields: [
          { name: "billdate" },
        ]
      },
      {
        name: "duedate",
        using: "BTREE",
        fields: [
          { name: "duedate" },
        ]
      },
      {
        name: "purchaserefid",
        using: "BTREE",
        fields: [
          { name: "purchaserefid" },
        ]
      },
      {
        name: "purchaseserver",
        using: "BTREE",
        fields: [
          { name: "purchaseserver" },
        ]
      },
      {
        name: "billtype",
        using: "BTREE",
        fields: [
          { name: "billtype" },
        ]
      },
      {
        name: "terms",
        using: "BTREE",
        fields: [
          { name: "terms" },
        ]
      },
    ]
  });
};
