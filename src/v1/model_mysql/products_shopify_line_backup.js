const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_shopify_line_backup', {
    lineid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    headerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sku: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "aperi_productid"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    variantid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 when newly created"
    },
    inventoryitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    uomvalue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "multiplied to base uom in aperi"
    },
    sellprice: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    buyprice: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "cm"
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "cm"
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "cm"
    },
    actualweight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "grams"
    },
    submittedweight: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    quantityservers: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      comment: "csv of server id to get quantity"
    },
    publishing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1=yes,0=no"
    },
    productskip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1=skip, filtered in queries, 0 =no"
    },
    option1name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    option1value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    option2name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    option2value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    option3name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    option3value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'products_shopify_line_backup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lineid" },
        ]
      },
    ]
  });
};
