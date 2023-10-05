const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backorderline', {
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyprice: {
      type: DataTypes.DECIMAL(32,9),
      allowNull: false
    },
    backorderqty: {
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
    branchaddress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    filledqty: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    filledqtytotal: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    backorderstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'backorderline',
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
        name: "productid",
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "branchaddress",
        using: "BTREE",
        fields: [
          { name: "branchaddress" },
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
        name: "backorderstatus",
        using: "BTREE",
        fields: [
          { name: "backorderstatus" },
        ]
      },
      {
        name: "filledqty",
        using: "BTREE",
        fields: [
          { name: "filledqty" },
        ]
      },
    ]
  });
};
