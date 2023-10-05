const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taxcodes', {
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atc: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rate: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'taxcodes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "taxid" },
        ]
      },
      {
        name: "atc_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "atc" },
        ]
      },
      {
        name: "atc",
        using: "BTREE",
        fields: [
          { name: "atc" },
        ]
      },
      {
        name: "rate",
        using: "BTREE",
        fields: [
          { name: "rate" },
        ]
      },
    ]
  });
};
