const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('journalline', {
    journalheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accountid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(22,2),
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trxtype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "debit = 1, credit = 2"
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iscleared: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "not cleared = 0, cleared = 1"
    }
  }, {
    sequelize,
    tableName: 'journalline',
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
        name: "journalheaderid",
        using: "BTREE",
        fields: [
          { name: "journalheaderid" },
        ]
      },
      {
        name: "iscleared",
        using: "BTREE",
        fields: [
          { name: "iscleared" },
        ]
      },
    ]
  });
};
