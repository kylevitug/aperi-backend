const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocksharingdirect', {
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    goingtoserverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outgoingid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'stocksharingdirect',
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
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
        ]
      },
      {
        name: "goingtoserverid",
        using: "BTREE",
        fields: [
          { name: "goingtoserverid" },
        ]
      },
    ]
  });
};
