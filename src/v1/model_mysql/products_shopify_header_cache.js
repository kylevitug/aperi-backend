const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_shopify_header_cache', {
    shopify_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tag1: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tag2: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tag3: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    body_html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "None"
    },
    weight: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      defaultValue: 0.00
    },
    sellprice: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true,
      defaultValue: 0.00
    },
    published_at: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "None"
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'products_shopify_header_cache',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shopify_id" },
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
        name: "title",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
      {
        name: "tag1",
        using: "BTREE",
        fields: [
          { name: "tag1" },
        ]
      },
      {
        name: "tag2",
        using: "BTREE",
        fields: [
          { name: "tag2" },
        ]
      },
      {
        name: "tag3",
        using: "BTREE",
        fields: [
          { name: "tag3" },
        ]
      },
      {
        name: "image",
        using: "BTREE",
        fields: [
          { name: "image" },
        ]
      },
      {
        name: "weight",
        using: "BTREE",
        fields: [
          { name: "weight" },
        ]
      },
      {
        name: "sellprice",
        using: "BTREE",
        fields: [
          { name: "sellprice" },
        ]
      },
      {
        name: "published_at",
        using: "BTREE",
        fields: [
          { name: "published_at" },
        ]
      },
    ]
  });
};
