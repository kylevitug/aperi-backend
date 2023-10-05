const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_backlog', {
    purchaseheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.DECIMAL(22,6),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    purchaseheaderid_new: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    buyprice: {
      type: DataTypes.DECIMAL(22,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'purchase_backlog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchaseheaderid" },
          { name: "productid" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "quantity",
        using: "BTREE",
        fields: [
          { name: "quantity" },
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
        name: "purchaseheaderid",
        using: "BTREE",
        fields: [
          { name: "purchaseheaderid" },
        ]
      },
      {
        name: "buyprice",
        using: "BTREE",
        fields: [
          { name: "buyprice" },
        ]
      },
      {
        name: "purchaseheaderid_new",
        using: "BTREE",
        fields: [
          { name: "purchaseheaderid_new" },
        ]
      },
    ]
  });
};
