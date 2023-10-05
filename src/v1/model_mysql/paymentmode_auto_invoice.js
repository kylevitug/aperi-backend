const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentmode_auto_invoice', {
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "saleheader or returnheader"
    },
    reference_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "1=sale,2=return"
    },
    payment_mode_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invoice_header_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'paymentmode_auto_invoice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "source_id" },
          { name: "reference_id" },
          { name: "reference_type" },
        ]
      },
      {
        name: "invoice_header_id",
        using: "BTREE",
        fields: [
          { name: "invoice_header_id" },
        ]
      },
    ]
  });
};
