const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productsseniorstatus', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    purchasedwithivat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    burdensharing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reflecteddiscount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unreflecteddiscount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    forcebuyprice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productsseniorstatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "purchasedwithivat",
        using: "BTREE",
        fields: [
          { name: "purchasedwithivat" },
        ]
      },
      {
        name: "burdensharing",
        using: "BTREE",
        fields: [
          { name: "burdensharing" },
        ]
      },
      {
        name: "reflecteddiscount",
        using: "BTREE",
        fields: [
          { name: "reflecteddiscount" },
        ]
      },
      {
        name: "unreflecteddiscount",
        using: "BTREE",
        fields: [
          { name: "unreflecteddiscount" },
        ]
      },
      {
        name: "forcebuyprice",
        using: "BTREE",
        fields: [
          { name: "forcebuyprice" },
        ]
      },
    ]
  });
};
