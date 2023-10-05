const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soa_line', {
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
    },
    soa_header_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soa_line',
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
        name: "payment_mode_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_mode_id" },
          { name: "soa_header_id" },
        ]
      },
      {
        name: "soa_header_id",
        using: "BTREE",
        fields: [
          { name: "soa_header_id" },
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
        name: "payment_mode_id",
        using: "BTREE",
        fields: [
          { name: "payment_mode_id" },
        ]
      },
      {
        name: "accounts_receivable_id",
        using: "BTREE",
        fields: [
          { name: "accounts_receivable_id" },
        ]
      },
      {
        name: "accounts_receivable_adjusting_id",
        using: "BTREE",
        fields: [
          { name: "accounts_receivable_adjusting_id" },
        ]
      },
    ]
  });
};
