const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchaselinecustom', {
    purchaseheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purchaselinelistidref: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'Inv #': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
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
    },
    'Inv Price': {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'purchaselinecustom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchaselinelistidref" },
        ]
      },
    ]
  });
};
