const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoicepaymentline', {
    invoicepaymentheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoiceheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoicepaymentamount: {
      type: DataTypes.DECIMAL(22,2),
      allowNull: false
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'invoicepaymentline',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
        ]
      },
      {
        name: "invoicepaymentheaderid",
        using: "BTREE",
        fields: [
          { name: "invoicepaymentheaderid" },
        ]
      },
      {
        name: "invoiceheaderid",
        using: "BTREE",
        fields: [
          { name: "invoiceheaderid" },
        ]
      },
      {
        name: "invoicepaymentamount",
        using: "BTREE",
        fields: [
          { name: "invoicepaymentamount" },
        ]
      },
    ]
  });
};
