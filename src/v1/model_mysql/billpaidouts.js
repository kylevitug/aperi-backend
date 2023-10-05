const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpaidouts', {
    paidoutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serversoutid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    journalrefid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'billpaidouts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paidoutid" },
          { name: "journalrefid" },
          { name: "billid" },
        ]
      },
      {
        name: "paidoutid",
        using: "BTREE",
        fields: [
          { name: "paidoutid" },
        ]
      },
      {
        name: "serversoutid",
        using: "BTREE",
        fields: [
          { name: "serversoutid" },
        ]
      },
      {
        name: "billid",
        using: "BTREE",
        fields: [
          { name: "billid" },
        ]
      },
    ]
  });
};
