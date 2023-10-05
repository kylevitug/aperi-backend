const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productscustom', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoiceprice: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    markup: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    deals: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'productscustom',
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
    ]
  });
};
