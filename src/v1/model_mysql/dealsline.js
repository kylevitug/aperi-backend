const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dealsline', {
    dealsheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dealtype: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dealdetails: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    itemmemo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    weekstoadd: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'dealsline',
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
        name: "dealtype",
        using: "BTREE",
        fields: [
          { name: "dealtype" },
        ]
      },
      {
        name: "dealdetails",
        using: "BTREE",
        fields: [
          { name: "dealdetails" },
        ]
      },
      {
        name: "dealdetails2",
        using: "BTREE",
        fields: [
          { name: "itemmemo" },
        ]
      },
      {
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
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
        name: "dealsheaderid",
        using: "BTREE",
        fields: [
          { name: "dealsheaderid" },
        ]
      },
    ]
  });
};
