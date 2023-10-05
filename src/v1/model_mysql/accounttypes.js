const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounttypes', {
    accounttypeid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "name"
    },
    debit: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    credit: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accounttypes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accounttypeid" },
        ]
      },
      {
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "debit",
        using: "BTREE",
        fields: [
          { name: "debit" },
        ]
      },
      {
        name: "credit",
        using: "BTREE",
        fields: [
          { name: "credit" },
        ]
      },
    ]
  });
};
