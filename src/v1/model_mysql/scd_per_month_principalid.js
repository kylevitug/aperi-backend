const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scd_per_month_principalid', {
    trx_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    principal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    is_invoiced: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_credited: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cm_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'scd_per_month_principalid',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trx_date" },
          { name: "principal_id" },
          { name: "serverid" },
        ]
      },
      {
        name: "amount",
        using: "BTREE",
        fields: [
          { name: "amount" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
      {
        name: "is_invoiced",
        using: "BTREE",
        fields: [
          { name: "is_invoiced" },
        ]
      },
      {
        name: "is_credited",
        using: "BTREE",
        fields: [
          { name: "is_credited" },
        ]
      },
      {
        name: "invoice_id",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "cm_id",
        using: "BTREE",
        fields: [
          { name: "cm_id" },
        ]
      },
    ]
  });
};
