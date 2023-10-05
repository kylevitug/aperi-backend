const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_modes_conversion_list', {
    transaction_id: {
      type: DataTypes.INTEGER,
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
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'payment_modes_conversion_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
    ]
  });
};
