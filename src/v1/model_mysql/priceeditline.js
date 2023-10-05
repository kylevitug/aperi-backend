const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('priceeditline', {
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    priceeditheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatestatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=no, 1=yes"
    },
    dateupdated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'priceeditline',
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
        name: "updatestatus",
        using: "BTREE",
        fields: [
          { name: "updatestatus" },
        ]
      },
      {
        name: "priceeditheaderid",
        using: "BTREE",
        fields: [
          { name: "priceeditheaderid" },
        ]
      },
      {
        name: "dateupdated",
        using: "BTREE",
        fields: [
          { name: "dateupdated" },
        ]
      },
      {
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
    ]
  });
};
