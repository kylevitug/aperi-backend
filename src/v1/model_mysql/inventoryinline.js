const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryinline', {
    inventoryinheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyprice: {
      type: DataTypes.FLOAT(16,7),
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    uom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
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
    tableName: 'inventoryinline',
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
        name: "inventoryinheaderid",
        using: "BTREE",
        fields: [
          { name: "inventoryinheaderid" },
        ]
      },
      {
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
    ]
  });
};
