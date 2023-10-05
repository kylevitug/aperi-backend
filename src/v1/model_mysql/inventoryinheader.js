const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryinheader', {
    inventoryinid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transferdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    locationcreated: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    locationtoid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    refnumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isreceived: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    total: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    inventoryoutidref: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'inventoryinheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryinid" },
        ]
      },
      {
        name: "locationcreated",
        using: "BTREE",
        fields: [
          { name: "locationcreated" },
        ]
      },
      {
        name: "locationtoid",
        using: "BTREE",
        fields: [
          { name: "locationtoid" },
        ]
      },
      {
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "inventoryoutidref",
        using: "BTREE",
        fields: [
          { name: "inventoryoutidref" },
        ]
      },
      {
        name: "isreceived",
        using: "BTREE",
        fields: [
          { name: "isreceived" },
        ]
      },
    ]
  });
};
