const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutline', {
    inventoryoutheaderid: {
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
    tableName: 'inventoryoutline',
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
        name: "inventoryoutheaderid",
        using: "BTREE",
        fields: [
          { name: "inventoryoutheaderid" },
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
