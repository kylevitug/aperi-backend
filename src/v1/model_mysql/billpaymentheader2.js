const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billpaymentheader2', {
    voucherid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isprinted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1=yes,0=no"
    },
    billpaymentheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isvoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1=yes,0=no"
    },
    voidedcheck: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'billpaymentheader2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "voucherid" },
        ]
      },
      {
        name: "billpaymentheaderid",
        using: "BTREE",
        fields: [
          { name: "billpaymentheaderid" },
        ]
      },
      {
        name: "isvoid",
        using: "BTREE",
        fields: [
          { name: "isvoid" },
        ]
      },
      {
        name: "isprinted",
        using: "BTREE",
        fields: [
          { name: "isprinted" },
        ]
      },
      {
        name: "voidedcheck",
        using: "BTREE",
        fields: [
          { name: "voidedcheck" },
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
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
    ]
  });
};
