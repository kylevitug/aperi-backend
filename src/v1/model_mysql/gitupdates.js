const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gitupdates', {
    hamnickname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    hamaddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    gitcommit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    localname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    localip: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    programdir: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    lastupdated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'gitupdates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hamnickname" },
          { name: "hamaddress" },
        ]
      },
      {
        name: "gitcommit",
        using: "BTREE",
        fields: [
          { name: "gitcommit" },
          { name: "lastupdated" },
        ]
      },
      {
        name: "localip",
        using: "BTREE",
        fields: [
          { name: "localip" },
          { name: "programdir" },
        ]
      },
      {
        name: "localname",
        using: "BTREE",
        fields: [
          { name: "localname" },
        ]
      },
    ]
  });
};
