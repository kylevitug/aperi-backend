const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoiceline', {
    invoiceheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyprice: {
      type: DataTypes.FLOAT(16,7),
      allowNull: true
    },
    quantity: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    uom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    purchaseserver: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'invoiceline',
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
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
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
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
        ]
      },
      {
        name: "purchaseserver",
        using: "BTREE",
        fields: [
          { name: "purchaseserver" },
        ]
      },
    ]
  });
};
