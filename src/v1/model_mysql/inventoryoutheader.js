const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutheader', {
    inventoryoutid: {
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
      type: DataTypes.STRING(255),
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
    oldlocationtoid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    issent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'inventoryoutheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryoutid" },
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
        name: "transferdate",
        using: "BTREE",
        fields: [
          { name: "transferdate" },
        ]
      },
      {
        name: "issent",
        using: "BTREE",
        fields: [
          { name: "issent" },
        ]
      },
    ]
  });
};
