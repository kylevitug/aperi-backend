const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryinlinecustom', {
    inventoryinheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inventoryinlinelistidref: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Batch #': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    'Exp Date (mm/dd/yyyy)': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'inventoryinlinecustom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryinlinelistidref" },
        ]
      },
      {
        name: "inventoryinheaderid",
        using: "BTREE",
        fields: [
          { name: "inventoryinheaderid" },
        ]
      },
      {
        name: "Batch #",
        using: "BTREE",
        fields: [
          { name: "Batch #" },
        ]
      },
      {
        name: "Exp Date (mm/dd/yyyy)",
        using: "BTREE",
        fields: [
          { name: "Exp Date (mm/dd/yyyy)" },
        ]
      },
    ]
  });
};
