const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adj_osdays', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adj_osdays',
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
        name: "days",
        using: "BTREE",
        fields: [
          { name: "days" },
        ]
      },
    ]
  });
};
