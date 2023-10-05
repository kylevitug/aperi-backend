const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soa_ghl_items', {
    statement_number: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    trx_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    txn_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    txn_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    card_pan: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    txn_type_txn_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    txn_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    mdr: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    wht: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    cwt: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    net_line_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soa_ghl_items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "statement_number" },
          { name: "trx_number" },
          { name: "txn_id" },
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
        name: "txn_date",
        using: "BTREE",
        fields: [
          { name: "txn_date" },
        ]
      },
    ]
  });
};
