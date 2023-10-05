const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atpurchaseheader', {
    purchaseheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    purchasedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    deliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    issent: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    issent2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    isprinted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    remoterefid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'atpurchaseheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchaseheaderid" },
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
        name: "purchasedate",
        using: "BTREE",
        fields: [
          { name: "purchasedate" },
          { name: "deliverydate" },
          { name: "sourceid" },
          { name: "total" },
          { name: "datecreated" },
        ]
      },
      {
        name: "issent",
        using: "BTREE",
        fields: [
          { name: "issent" },
        ]
      },
      {
        name: "issent2",
        using: "BTREE",
        fields: [
          { name: "issent2" },
        ]
      },
      {
        name: "isprinted",
        using: "BTREE",
        fields: [
          { name: "isprinted" },
        ]
      },
      {
        name: "remoterefid",
        using: "BTREE",
        fields: [
          { name: "remoterefid" },
        ]
      },
    ]
  });
};
