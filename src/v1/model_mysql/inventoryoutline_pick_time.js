const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutline_pick_time', {
    inventoryoutheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    actual_pick_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actual_pick_data: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    estimated_pick_time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estimated_pick_data: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventoryoutline_pick_time',
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
        name: "inventoryoutheaderid",
        using: "BTREE",
        fields: [
          { name: "inventoryoutheaderid" },
        ]
      },
    ]
  });
};
