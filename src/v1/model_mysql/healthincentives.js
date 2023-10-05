const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('healthincentives', {
    trxid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ornumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branchid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    trxdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    paidoutid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    journalid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'healthincentives',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trxid" },
        ]
      },
      {
        name: "trxdate",
        using: "BTREE",
        fields: [
          { name: "trxdate" },
        ]
      },
      {
        name: "amount",
        using: "BTREE",
        fields: [
          { name: "amount" },
        ]
      },
      {
        name: "branchid",
        using: "BTREE",
        fields: [
          { name: "branchid" },
        ]
      },
      {
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
        ]
      },
    ]
  });
};
