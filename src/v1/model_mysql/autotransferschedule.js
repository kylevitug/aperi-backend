const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autotransferschedule', {
    invoicedate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    suppliergroupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nextinvoicedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nextdeliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    outgoingid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currentstatus: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    currentemployeeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timestart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timeend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    safetymultiplier: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    minimumdays: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    holdingmultiplier: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    maximumdays: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    isprinted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dateprinted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    issent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sentresult: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    datesent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    inventoryinid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'autotransferschedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoicedate" },
          { name: "sourceid" },
          { name: "suppliergroupid" },
        ]
      },
      {
        name: "inventoryinid",
        using: "BTREE",
        fields: [
          { name: "inventoryinid" },
        ]
      },
      {
        name: "datesent",
        using: "BTREE",
        fields: [
          { name: "datesent" },
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
        name: "dateprinted",
        using: "BTREE",
        fields: [
          { name: "dateprinted" },
        ]
      },
      {
        name: "isprinted",
        using: "BTREE",
        fields: [
          { name: "isprinted" },
        ]
      },
    ]
  });
};
