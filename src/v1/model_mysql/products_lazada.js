const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_lazada', {
    PrimaryCategory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    SellerSku: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    package_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    package_height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    package_weight: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    package_width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image6: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image7: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image8: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagel1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagel8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    lazadaref: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'products_lazada',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SellerSku" },
        ]
      },
      {
        name: "PrimaryCategory",
        using: "BTREE",
        fields: [
          { name: "PrimaryCategory" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "brand",
        using: "BTREE",
        fields: [
          { name: "brand" },
        ]
      },
      {
        name: "model",
        using: "BTREE",
        fields: [
          { name: "model" },
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
        name: "price",
        using: "BTREE",
        fields: [
          { name: "price" },
        ]
      },
      {
        name: "package_length",
        using: "BTREE",
        fields: [
          { name: "package_length" },
        ]
      },
      {
        name: "package_height",
        using: "BTREE",
        fields: [
          { name: "package_height" },
        ]
      },
      {
        name: "package_weight",
        using: "BTREE",
        fields: [
          { name: "package_weight" },
        ]
      },
      {
        name: "package_width",
        using: "BTREE",
        fields: [
          { name: "package_width" },
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
        name: "lazadaref",
        using: "BTREE",
        fields: [
          { name: "lazadaref" },
        ]
      },
    ]
  });
};
