const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_totalsold', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    totalquantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    totalnetsales: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    totalnetcost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'products_totalsold',
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
        name: "startdate",
        using: "BTREE",
        fields: [
          { name: "startdate" },
        ]
      },
      {
        name: "enddate",
        using: "BTREE",
        fields: [
          { name: "enddate" },
        ]
      },
      {
        name: "totalquantity",
        using: "BTREE",
        fields: [
          { name: "totalquantity" },
        ]
      },
      {
        name: "totalnetsales",
        using: "BTREE",
        fields: [
          { name: "totalnetsales" },
        ]
      },
      {
        name: "totalnetcost",
        using: "BTREE",
        fields: [
          { name: "totalnetcost" },
        ]
      },
      {
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
    ]
  });
};
