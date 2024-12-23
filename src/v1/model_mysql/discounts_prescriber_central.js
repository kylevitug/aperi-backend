const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discounts_prescriber_central', {
    prescriberid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    prescribername: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'discounts_prescriber_central',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "prescriberid" },
          { name: "prescribername" },
        ]
      },
    ]
  });
};
