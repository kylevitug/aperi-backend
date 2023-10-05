const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeincentives_line', {
    headerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billpaymentid: {
      type: DataTypes.INTEGER,
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
    tableName: 'employeeincentives_line',
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
        name: "billpaymentid",
        using: "BTREE",
        fields: [
          { name: "billpaymentid" },
        ]
      },
      {
        name: "headerid",
        using: "BTREE",
        fields: [
          { name: "headerid" },
        ]
      },
    ]
  });
};
