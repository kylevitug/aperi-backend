const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    invoiceformat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    discountbeforevat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    supplierterms: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 11
    },
    isinactive: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0=active,1=inactive"
    },
    sapvendorcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
      {
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "discount",
        using: "BTREE",
        fields: [
          { name: "discount" },
        ]
      },
      {
        name: "supplierterms",
        using: "BTREE",
        fields: [
          { name: "supplierterms" },
        ]
      },
      {
        name: "isinactive",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
      {
        name: "sapvendorcode",
        using: "BTREE",
        fields: [
          { name: "sapvendorcode" },
        ]
      },
    ]
  });
};
