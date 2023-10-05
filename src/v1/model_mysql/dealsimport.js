const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dealsimport', {
    sapcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dealcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dealtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    weekstoadd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dealref: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'dealsimport',
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
        name: "dealref",
        using: "BTREE",
        fields: [
          { name: "dealref" },
        ]
      },
      {
        name: "dealcode",
        using: "BTREE",
        fields: [
          { name: "dealcode" },
        ]
      },
      {
        name: "itemname",
        using: "BTREE",
        fields: [
          { name: "itemname" },
        ]
      },
      {
        name: "sapcode",
        using: "BTREE",
        fields: [
          { name: "sapcode" },
        ]
      },
      {
        name: "weekstoadd",
        using: "BTREE",
        fields: [
          { name: "weekstoadd" },
        ]
      },
      {
        name: "dealref_2",
        using: "BTREE",
        fields: [
          { name: "dealref" },
        ]
      },
    ]
  });
};
