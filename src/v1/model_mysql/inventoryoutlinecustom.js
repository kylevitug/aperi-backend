const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutlinecustom', {
    inventoryoutheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inventoryoutlinelistidref: {
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
    tableName: 'inventoryoutlinecustom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryoutlinelistidref" },
        ]
      },
    ]
  });
};
