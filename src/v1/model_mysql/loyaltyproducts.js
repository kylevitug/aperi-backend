const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loyaltyproducts', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discountperc: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discountamt: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    datestarted: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateended: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'loyaltyproducts',
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
        name: "datestarted",
        using: "BTREE",
        fields: [
          { name: "datestarted" },
          { name: "dateended" },
        ]
      },
    ]
  });
};
