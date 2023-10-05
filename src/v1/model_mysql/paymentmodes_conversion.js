const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymentmodes_conversion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payment_mode_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accounts_receivable_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accounts_receivable_adjusting_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paymentmodes_conversion',
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
    ]
  });
};
