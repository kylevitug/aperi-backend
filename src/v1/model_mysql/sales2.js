const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales2', {
    zid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    current: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false
    },
    previous: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false
    },
    netsales: {
      type: DataTypes.DECIMAL(17,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sales2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "zid" },
        ]
      },
      {
        name: "current",
        using: "BTREE",
        fields: [
          { name: "current" },
        ]
      },
      {
        name: "previous",
        using: "BTREE",
        fields: [
          { name: "previous" },
        ]
      },
      {
        name: "netsales",
        using: "BTREE",
        fields: [
          { name: "netsales" },
        ]
      },
    ]
  });
};
