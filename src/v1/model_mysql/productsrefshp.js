const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productsrefshp', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    shopeeproductid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    parentskunum: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    productname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    variationid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    skunumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    variationname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'productsrefshp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shopeeproductid" },
          { name: "variationid" },
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
          { name: "parentskunum" },
          { name: "productname" },
          { name: "variationid" },
          { name: "skunumber" },
          { name: "variationname" },
        ]
      },
    ]
  });
};
