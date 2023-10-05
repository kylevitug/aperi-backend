const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpaymentlinecolumns', {
    columnid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    columnindex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    columntemplatename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    columnname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    columnwidth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    columnisinactive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    columniscustom: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    columnislabelonly: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    columniseditable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    columnismovable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'billpaymentlinecolumns',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "columnid" },
        ]
      },
      {
        name: "columnname",
        using: "BTREE",
        fields: [
          { name: "columnname" },
        ]
      },
      {
        name: "columnindex",
        using: "BTREE",
        fields: [
          { name: "columnindex" },
        ]
      },
      {
        name: "columntemplatename",
        using: "BTREE",
        fields: [
          { name: "columntemplatename" },
        ]
      },
      {
        name: "columnisinactive",
        using: "BTREE",
        fields: [
          { name: "columnisinactive" },
        ]
      },
      {
        name: "columniscustom",
        using: "BTREE",
        fields: [
          { name: "columniscustom" },
        ]
      },
      {
        name: "columnislabelonly",
        using: "BTREE",
        fields: [
          { name: "columnislabelonly" },
        ]
      },
    ]
  });
};
