const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pricelist_generic_list', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productname: {
      type: DataTypes.STRING(300),
      allowNull: false,
      primaryKey: true
    },
    packaging: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceperpiece: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    listprice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    productid_system: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pricelist_generic_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
          { name: "productname" },
        ]
      },
      {
        name: "packaging",
        using: "BTREE",
        fields: [
          { name: "packaging" },
          { name: "priceperpiece" },
          { name: "productid_system" },
        ]
      },
      {
        name: "listprice",
        using: "BTREE",
        fields: [
          { name: "listprice" },
        ]
      },
    ]
  });
};
