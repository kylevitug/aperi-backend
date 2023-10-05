const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discounts_customers_central', {
    customerid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    customername: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'discounts_customers_central',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customerid" },
          { name: "customername" },
        ]
      },
    ]
  });
};
