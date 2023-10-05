const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory_value_fifo', {
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itemname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sourceip: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    valuationmethod: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avgbprice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    uom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vol: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'inventory_value_fifo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverid" },
          { name: "itemid" },
          { name: "enddate" },
        ]
      },
      {
        name: "enddate",
        using: "BTREE",
        fields: [
          { name: "enddate" },
        ]
      },
      {
        name: "itemid",
        using: "BTREE",
        fields: [
          { name: "itemid" },
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
