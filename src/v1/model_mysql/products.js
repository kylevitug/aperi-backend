const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    barcode2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    barcode3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    posname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    whlocation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    principalid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departmentid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyprice: {
      type: DataTypes.DECIMAL(32,9),
      allowNull: false
    },
    purchasinguom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purchasenotes: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sellprice: {
      type: DataTypes.DECIMAL(32,2),
      allowNull: false
    },
    uom1: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    uom1name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sellprice2: {
      type: DataTypes.DECIMAL(32,2),
      allowNull: true
    },
    uom2: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    uom2name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sellprice3: {
      type: DataTypes.DECIMAL(32,2),
      allowNull: true
    },
    uom3: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    uom3name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sellprice4: {
      type: DataTypes.DECIMAL(32,2),
      allowNull: true
    },
    uom4: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    uom4name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sellprice5: {
      type: DataTypes.DECIMAL(32,2),
      allowNull: true
    },
    uom5: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    uom5name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    statusid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    supplierclassid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    minimumqty: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
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
        name: "barcode",
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "supplierid",
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
      {
        name: "principalid",
        using: "BTREE",
        fields: [
          { name: "principalid" },
        ]
      },
      {
        name: "departmentid",
        using: "BTREE",
        fields: [
          { name: "departmentid" },
        ]
      },
      {
        name: "statusid",
        using: "BTREE",
        fields: [
          { name: "statusid" },
        ]
      },
      {
        name: "taxid",
        using: "BTREE",
        fields: [
          { name: "taxid" },
        ]
      },
      {
        name: "supplierclassid",
        using: "BTREE",
        fields: [
          { name: "supplierclassid" },
        ]
      },
      {
        name: "minimumqty",
        using: "BTREE",
        fields: [
          { name: "minimumqty" },
        ]
      },
    ]
  });
};
