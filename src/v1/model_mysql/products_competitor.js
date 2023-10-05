const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_competitor', {
    competitor_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    competitor_product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    competitor_product_price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    uom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'products_competitor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "competitor_product_name" },
          { name: "competitor_code" },
        ]
      },
      {
        name: "competitor_product_price",
        using: "BTREE",
        fields: [
          { name: "competitor_product_price" },
        ]
      },
      {
        name: "uom",
        using: "BTREE",
        fields: [
          { name: "uom" },
        ]
      },
      {
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
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
