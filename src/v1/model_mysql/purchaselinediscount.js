const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchaselinediscount', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discounttype: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    discountset: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    discountduration: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    additional: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'purchaselinediscount',
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
        name: "additional",
        using: "BTREE",
        fields: [
          { name: "additional" },
        ]
      },
      {
        name: "discountset",
        using: "BTREE",
        fields: [
          { name: "discountset" },
        ]
      },
      {
        name: "discounttype",
        using: "BTREE",
        fields: [
          { name: "discounttype" },
        ]
      },
      {
        name: "discountduration",
        using: "BTREE",
        fields: [
          { name: "discountduration" },
        ]
      },
    ]
  });
};
