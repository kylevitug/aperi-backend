const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_merged', {
    productid_parent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productid_child: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'products_merged',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid_parent" },
          { name: "productid_child" },
        ]
      },
    ]
  });
};
