const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankinfo', {
    bankid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bankaccountname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    bankaccountnumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    approver: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    templatename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    filename_prefix: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    printername: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bankinfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankid" },
        ]
      },
      {
        name: "bankaccountname",
        using: "BTREE",
        fields: [
          { name: "bankaccountname" },
        ]
      },
      {
        name: "bankaccountnumber",
        using: "BTREE",
        fields: [
          { name: "bankaccountnumber" },
        ]
      },
      {
        name: "approver",
        using: "BTREE",
        fields: [
          { name: "approver" },
        ]
      },
      {
        name: "templatename",
        using: "BTREE",
        fields: [
          { name: "templatename" },
        ]
      },
      {
        name: "filename",
        using: "BTREE",
        fields: [
          { name: "filename_prefix" },
        ]
      },
      {
        name: "printername",
        using: "BTREE",
        fields: [
          { name: "printername" },
        ]
      },
    ]
  });
};
