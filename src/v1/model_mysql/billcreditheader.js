const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billcreditheader', {
    billcreditheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billcreditdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    principalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    refnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    memo: {
      type: DataTypes.TEXT,
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
    creditstatus: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    billrefid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'billcreditheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billcreditheaderid" },
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
          { name: "creditstatus" },
        ]
      },
      {
        name: "billdate",
        using: "BTREE",
        fields: [
          { name: "billcreditdate" },
        ]
      },
      {
        name: "purchaserefid",
        using: "BTREE",
        fields: [
          { name: "billrefid" },
        ]
      },
      {
        name: "principalid",
        using: "BTREE",
        fields: [
          { name: "principalid" },
        ]
      },
    ]
  });
};
