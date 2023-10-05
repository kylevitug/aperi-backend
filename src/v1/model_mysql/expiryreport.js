const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expiryreport', {
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    batch: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    expdate: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    total: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: false,
      defaultValue: 0.00
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reportedasof: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'expiryreport',
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
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "batch",
        using: "BTREE",
        fields: [
          { name: "batch" },
        ]
      },
      {
        name: "expdate",
        using: "BTREE",
        fields: [
          { name: "expdate" },
        ]
      },
      {
        name: "total",
        using: "BTREE",
        fields: [
          { name: "total" },
        ]
      },
      {
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
      {
        name: "reportedasof",
        using: "BTREE",
        fields: [
          { name: "reportedasof" },
        ]
      },
    ]
  });
};
