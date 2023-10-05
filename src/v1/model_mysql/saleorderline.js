const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saleorderline', {
    saleorderheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountpercent: {
      type: DataTypes.FLOAT(14,6),
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
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'saleorderline',
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
        name: "saleorderheaderid",
        using: "BTREE",
        fields: [
          { name: "saleorderheaderid" },
        ]
      },
    ]
  });
};
