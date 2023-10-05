const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_uom_list', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uom_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uom_value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    uom_description: {
      type: DataTypes.STRING(200),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'products_uom_list',
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
        name: "product_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "uom_name" },
        ]
      },
      {
        name: "uom_value",
        using: "BTREE",
        fields: [
          { name: "uom_value" },
        ]
      },
      {
        name: "uom_description",
        using: "BTREE",
        fields: [
          { name: "uom_description", length: 191 },
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
    ]
  });
};
