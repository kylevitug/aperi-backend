const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoiceheader', {
    invoiceheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoicedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customer_terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customerid: {
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
    paymentstatus: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    trxrefid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    trxreftype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1=ia, 2=auto_invoice_payment_modes"
    }
  }, {
    sequelize,
    tableName: 'invoiceheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoiceheaderid" },
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
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "paymentstatus",
        using: "BTREE",
        fields: [
          { name: "paymentstatus" },
        ]
      },
      {
        name: "invoicedate",
        using: "BTREE",
        fields: [
          { name: "invoicedate" },
        ]
      },
      {
        name: "customer_terms",
        using: "BTREE",
        fields: [
          { name: "customer_terms" },
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
        name: "trxreftype",
        using: "BTREE",
        fields: [
          { name: "trxreftype" },
        ]
      },
      {
        name: "trxrefid",
        using: "BTREE",
        fields: [
          { name: "trxrefid" },
        ]
      },
    ]
  });
};
