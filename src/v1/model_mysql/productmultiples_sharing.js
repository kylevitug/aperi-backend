const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productmultiples_sharing', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    multiple: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productmultiples_sharing',
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
        name: "multiple",
        using: "BTREE",
        fields: [
          { name: "multiple" },
        ]
      },
    ]
  });
};
