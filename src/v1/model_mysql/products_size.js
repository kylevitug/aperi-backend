const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_size', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    length: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    uom_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uom_qty: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products_size',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "uom_name",
        using: "BTREE",
        fields: [
          { name: "uom_name" },
        ]
      },
      {
        name: "uom_qty",
        using: "BTREE",
        fields: [
          { name: "uom_qty" },
        ]
      },
      {
        name: "length",
        using: "BTREE",
        fields: [
          { name: "length" },
        ]
      },
      {
        name: "width",
        using: "BTREE",
        fields: [
          { name: "width" },
        ]
      },
      {
        name: "height",
        using: "BTREE",
        fields: [
          { name: "height" },
        ]
      },
    ]
  });
};
