const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchaseheader_global', {
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    purchaseheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    purchasedate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isreceived: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    billedstatus: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'purchaseheader_global',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverid" },
          { name: "purchaseheaderid" },
        ]
      },
      {
        name: "isreceived",
        using: "BTREE",
        fields: [
          { name: "isreceived" },
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
        name: "employeeid",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
      {
        name: "billedstatus",
        using: "BTREE",
        fields: [
          { name: "billedstatus" },
        ]
      },
    ]
  });
};
