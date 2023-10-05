const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentmodes_conversion_old', {
    paymentmodeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cwt1_apply: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cwt1_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cwt1_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "mode 1 = amount\/1.12 * 0.05 mode 2 = amount\/1.12 * 0.01 mode 3 = amount * 0.005"
    },
    cwt2_apply: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    cwt2_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cwt2_mode: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "mode 1 = amount\/1.12 * 0.05 mode 2 = amount\/1.12 * 0.01 mode 3 = amount * 0.005"
    },
    mdr_apply: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mdr_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mdr_percentage: {
      type: DataTypes.DECIMAL(15,6),
      allowNull: false,
      defaultValue: 0.000000
    },
    invoice_customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paymentmodes_conversion_old',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paymentmodeid" },
          { name: "accountid" },
        ]
      },
      {
        name: "with_cwt",
        using: "BTREE",
        fields: [
          { name: "cwt1_apply" },
        ]
      },
      {
        name: "invoice_customer_id",
        using: "BTREE",
        fields: [
          { name: "invoice_customer_id" },
        ]
      },
      {
        name: "mdr_percentage",
        using: "BTREE",
        fields: [
          { name: "mdr_percentage" },
        ]
      },
      {
        name: "mdr_account_id",
        using: "BTREE",
        fields: [
          { name: "mdr_account_id" },
        ]
      },
      {
        name: "mdr_apply",
        using: "BTREE",
        fields: [
          { name: "mdr_apply" },
        ]
      },
      {
        name: "cwt2_mode",
        using: "BTREE",
        fields: [
          { name: "cwt2_mode" },
        ]
      },
      {
        name: "cwt2_account_id",
        using: "BTREE",
        fields: [
          { name: "cwt2_account_id" },
        ]
      },
      {
        name: "cwt2_apply",
        using: "BTREE",
        fields: [
          { name: "cwt2_apply" },
        ]
      },
      {
        name: "cwt1_mode",
        using: "BTREE",
        fields: [
          { name: "cwt1_mode" },
        ]
      },
      {
        name: "cwt1_account_id",
        using: "BTREE",
        fields: [
          { name: "cwt1_account_id" },
        ]
      },
      {
        name: "invoice_customer_id_2",
        using: "BTREE",
        fields: [
          { name: "invoice_customer_id" },
        ]
      },
      {
        name: "terms",
        using: "BTREE",
        fields: [
          { name: "terms" },
        ]
      },
    ]
  });
};
