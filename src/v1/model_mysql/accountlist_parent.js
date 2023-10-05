const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountlist_parent', {
    id: {
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
    accounttypeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isinactive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'accountlist_parent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
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
        name: "accounttypeid",
        using: "BTREE",
        fields: [
          { name: "accounttypeid" },
        ]
      },
      {
        name: "isinactive",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
    ]
  });
};
