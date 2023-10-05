const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saleorderline2', {
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prescriberid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prescribername: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'saleorderline2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
        ]
      },
      {
        name: "prescriberid",
        using: "BTREE",
        fields: [
          { name: "prescriberid" },
        ]
      },
      {
        name: "prescribername",
        using: "BTREE",
        fields: [
          { name: "prescribername" },
        ]
      },
    ]
  });
};
