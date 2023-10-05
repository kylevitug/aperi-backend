const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocksharing_uoms', {
    purchasing_uom: {
      type: DataTypes.FLOAT,
      allowNull: false,
      primaryKey: true
    },
    product_multiple: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stocksharing_uoms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchasing_uom" },
        ]
      },
    ]
  });
};
