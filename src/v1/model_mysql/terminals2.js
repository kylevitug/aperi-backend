const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminals2', {
    terminalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    proprietorname: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    businessname: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    tinnumber: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    terminaltypeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brandname: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    modelname: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    serialno: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    permitno: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    softwarename: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    minnumber: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    localterminalid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iscancelled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isactivedb: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'terminals2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "terminalid" },
        ]
      },
      {
        name: "proprietorname",
        using: "BTREE",
        fields: [
          { name: "proprietorname" },
        ]
      },
      {
        name: "businessname",
        using: "BTREE",
        fields: [
          { name: "businessname" },
        ]
      },
      {
        name: "address",
        using: "BTREE",
        fields: [
          { name: "address" },
        ]
      },
      {
        name: "tinnumber",
        using: "BTREE",
        fields: [
          { name: "tinnumber" },
        ]
      },
      {
        name: "terminaltypeid",
        using: "BTREE",
        fields: [
          { name: "terminaltypeid" },
        ]
      },
      {
        name: "brandname",
        using: "BTREE",
        fields: [
          { name: "brandname" },
        ]
      },
      {
        name: "modelname",
        using: "BTREE",
        fields: [
          { name: "modelname" },
        ]
      },
      {
        name: "serialno",
        using: "BTREE",
        fields: [
          { name: "serialno" },
        ]
      },
      {
        name: "permitno",
        using: "BTREE",
        fields: [
          { name: "permitno" },
        ]
      },
      {
        name: "softwarename",
        using: "BTREE",
        fields: [
          { name: "softwarename" },
        ]
      },
      {
        name: "minnumber",
        using: "BTREE",
        fields: [
          { name: "minnumber" },
        ]
      },
      {
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
      {
        name: "localterminalid",
        using: "BTREE",
        fields: [
          { name: "localterminalid" },
        ]
      },
      {
        name: "iscancelled",
        using: "BTREE",
        fields: [
          { name: "iscancelled" },
        ]
      },
      {
        name: "isactivedb",
        using: "BTREE",
        fields: [
          { name: "isactivedb" },
        ]
      },
    ]
  });
};
