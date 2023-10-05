const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soa_header', {
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
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer_terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    deposit_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'soa_header',
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
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "customer_terms",
        using: "BTREE",
        fields: [
          { name: "customer_terms" },
        ]
      },
      {
        name: "server_id",
        using: "BTREE",
        fields: [
          { name: "server_id" },
        ]
      },
      {
        name: "merchant_id",
        using: "BTREE",
        fields: [
          { name: "merchant_id" },
        ]
      },
      {
        name: "deposit_account_id",
        using: "BTREE",
        fields: [
          { name: "deposit_account_id" },
        ]
      },
    ]
  });
};
