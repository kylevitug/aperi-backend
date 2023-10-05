const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutlog', {
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inventoryoutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "inventoryoutid"
    },
    timein: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timeout: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventoryoutlog',
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
        name: "inventoryoutid",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryoutid" },
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
        name: "timein",
        using: "BTREE",
        fields: [
          { name: "timein" },
        ]
      },
      {
        name: "timeout",
        using: "BTREE",
        fields: [
          { name: "timeout" },
        ]
      },
    ]
  });
};
