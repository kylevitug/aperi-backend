const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventorycountsheader', {
    inventory_count_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inventory_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inventory_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_finished_counting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_approved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=for_approval, 1=approved"
    }
  }, {
    sequelize,
    tableName: 'inventorycountsheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventory_count_id" },
        ]
      },
      {
        name: "inventory_start_date",
        using: "BTREE",
        fields: [
          { name: "inventory_start_date" },
        ]
      },
      {
        name: "inventory_end_date",
        using: "BTREE",
        fields: [
          { name: "inventory_end_date" },
        ]
      },
      {
        name: "supplier_id",
        using: "BTREE",
        fields: [
          { name: "supplier_id" },
        ]
      },
      {
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
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
        name: "inventory_counts_status",
        using: "BTREE",
        fields: [
          { name: "is_finished_counting" },
        ]
      },
      {
        name: "is_approved",
        using: "BTREE",
        fields: [
          { name: "is_approved" },
        ]
      },
    ]
  });
};
