const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soa_line_deductions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deducting_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deducting_amount_divisor: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      comment: "1=Gross Amount, 1.12=Net Of Vat"
    },
    deducting_percentage: {
      type: DataTypes.DECIMAL(6,6),
      allowNull: false
    },
    soa_line_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soa_line_deductions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "deducting_account_id",
        using: "BTREE",
        fields: [
          { name: "deducting_account_id" },
        ]
      },
      {
        name: "deducting_amount_divisor",
        using: "BTREE",
        fields: [
          { name: "deducting_amount_divisor" },
        ]
      },
      {
        name: "deducting_percentage",
        using: "BTREE",
        fields: [
          { name: "deducting_percentage" },
        ]
      },
      {
        name: "soa_line_id",
        using: "BTREE",
        fields: [
          { name: "soa_line_id" },
        ]
      },
    ]
  });
};
