const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchaseheader', {
    purchaseheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      type: DataTypes.STRING(1000),
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
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    supplierclassid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    billedstatus: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'purchaseheader',
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
        name: "supplierclassid",
        using: "BTREE",
        fields: [
          { name: "supplierclassid" },
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
