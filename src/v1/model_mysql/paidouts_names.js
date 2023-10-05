const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paidouts_names', {
    nameid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    paidoutname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    accountid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paidouts_names',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nameid" },
        ]
      },
      {
        name: "paidoutname",
        using: "BTREE",
        fields: [
          { name: "paidoutname" },
        ]
      },
      {
        name: "accountid",
        using: "BTREE",
        fields: [
          { name: "accountid" },
        ]
      },
    ]
  });
};
