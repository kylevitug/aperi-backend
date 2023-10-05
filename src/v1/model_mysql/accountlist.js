const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accountlist', {
    accountid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "accountname"
    },
    accounttypeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tableid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    withholdingtax: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true,
      defaultValue: 0.00
    },
    fs_label: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    book_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1=purch, 2=cash_disb"
    },
    isinactive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'accountlist',
    timestamps: false,
    indexes: [
      {
        name: "1",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountid" },
        ]
      },
      {
        name: "accountname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountname" },
        ]
      },
      {
        name: "tableid",
        using: "BTREE",
        fields: [
          { name: "tableid" },
        ]
      },
      {
        name: "withholdingtax",
        using: "BTREE",
        fields: [
          { name: "withholdingtax" },
        ]
      },
      {
        name: "fs_label",
        using: "BTREE",
        fields: [
          { name: "fs_label" },
        ]
      },
    ]
  });
};
