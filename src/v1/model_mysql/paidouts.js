const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paidouts', {
    paidoutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    reason: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    locationid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cashierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    managerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eodcounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sessioncounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentmodeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paidouts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paidoutid" },
        ]
      },
      {
        name: "eodcounter",
        using: "BTREE",
        fields: [
          { name: "eodcounter" },
          { name: "sessioncounter" },
        ]
      },
      {
        name: "paymentmodeid",
        using: "BTREE",
        fields: [
          { name: "paymentmodeid" },
        ]
      },
      {
        name: "locationid",
        using: "BTREE",
        fields: [
          { name: "locationid" },
        ]
      },
      {
        name: "cashierid",
        using: "BTREE",
        fields: [
          { name: "cashierid" },
        ]
      },
      {
        name: "managerid",
        using: "BTREE",
        fields: [
          { name: "managerid" },
        ]
      },
      {
        name: "sessioncounter",
        using: "BTREE",
        fields: [
          { name: "sessioncounter" },
        ]
      },
    ]
  });
};
