const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_shopify_header_backup', {
    headerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_shopify: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    body_html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    handle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    product_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tag3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vendor: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products_shopify_header_backup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "headerid" },
        ]
      },
    ]
  });
};
