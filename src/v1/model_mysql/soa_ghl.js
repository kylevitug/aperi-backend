const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soa_ghl', {
    file_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statement_number: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    statement_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    net_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    invoice_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soa_ghl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "statement_number" },
        ]
      },
      {
        name: "statement_date",
        using: "BTREE",
        fields: [
          { name: "statement_date" },
        ]
      },
      {
        name: "invoice_payment_id",
        using: "BTREE",
        fields: [
          { name: "invoice_payment_id" },
        ]
      },
    ]
  });
};
