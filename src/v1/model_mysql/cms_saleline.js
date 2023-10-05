const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_saleline', {
    trxid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    uom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    sellprice: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    discountid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discountamount: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    docid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'cms_saleline',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
        ]
      },
      {
        name: "itemid",
        using: "BTREE",
        fields: [
          { name: "itemid" },
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
        name: "discountid",
        using: "BTREE",
        fields: [
          { name: "discountid" },
        ]
      },
      {
        name: "saleheaderid",
        using: "BTREE",
        fields: [
          { name: "saleheaderid" },
        ]
      },
      {
        name: "branchid",
        using: "BTREE",
        fields: [
          { name: "trxid" },
        ]
      },
    ]
  });
};
