const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billcreditheader_2307', {
    billpaymentheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fromdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    todate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    payeetin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payeename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payeeaddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payortin: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payorname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payoraddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    atc: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    totalpayment: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    totalewt: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
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
    },
    isprinted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    validated: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true,
      defaultValue: 0.00
    },
    isverified: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    verifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verifiedby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'billcreditheader_2307',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billpaymentheaderid" },
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
        name: "validated",
        using: "BTREE",
        fields: [
          { name: "validated" },
        ]
      },
      {
        name: "verifiedby",
        using: "BTREE",
        fields: [
          { name: "verifiedby" },
        ]
      },
      {
        name: "verifieddate",
        using: "BTREE",
        fields: [
          { name: "verifieddate" },
        ]
      },
      {
        name: "isverified",
        using: "BTREE",
        fields: [
          { name: "isverified" },
        ]
      },
    ]
  });
};
