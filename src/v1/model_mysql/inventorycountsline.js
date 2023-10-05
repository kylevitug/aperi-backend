const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventorycountsline', {
    inventory_count_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adjusted_qty: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    encoded_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    list_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inventorycountsline',
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
      {
        name: "inventory_count_id",
        using: "BTREE",
        fields: [
          { name: "inventory_count_id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "adjusted_qty",
        using: "BTREE",
        fields: [
          { name: "adjusted_qty" },
        ]
      },
      {
        name: "date_modified",
        using: "BTREE",
        fields: [
          { name: "date_modified" },
        ]
      },
      {
        name: "employee_id",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "encoded_quantity",
        using: "BTREE",
        fields: [
          { name: "encoded_quantity" },
        ]
      },
    ]
  });
};
