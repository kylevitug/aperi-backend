const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpaymentline', {
    billpaymentheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billamount: {
      type: DataTypes.DECIMAL(22,2),
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
    tableName: 'billpaymentline',
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
        name: "billamount",
        using: "BTREE",
        fields: [
          { name: "billamount" },
        ]
      },
      {
        name: "billheaderid",
        using: "BTREE",
        fields: [
          { name: "billheaderid" },
        ]
      },
      {
        name: "billpaymentheaderid",
        using: "BTREE",
        fields: [
          { name: "billpaymentheaderid" },
        ]
      },
    ]
  });
};
