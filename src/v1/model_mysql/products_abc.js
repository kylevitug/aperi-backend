const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_abc', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    principalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    totalpercentage: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    runningbalance: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    pidclass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'products_abc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
          { name: "principalid" },
          { name: "productname" },
        ]
      },
      {
        name: "rank",
        using: "BTREE",
        fields: [
          { name: "rank" },
        ]
      },
      {
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "pidclass",
        using: "BTREE",
        fields: [
          { name: "pidclass" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
      {
        name: "totalpercentage",
        using: "BTREE",
        fields: [
          { name: "totalpercentage" },
        ]
      },
      {
        name: "runningbalance",
        using: "BTREE",
        fields: [
          { name: "runningbalance" },
        ]
      },
      {
        name: "productname",
        using: "BTREE",
        fields: [
          { name: "productname" },
        ]
      },
    ]
  });
};
