const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paidouts_reconcile_override', {
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paidoutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paidoutnameid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    businessname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    businessaddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    businesstin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vatstatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "vat=1,nonvat=0"
    },
    receiptnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cutoffdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paidouts_reconcile_override',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sourceid" },
          { name: "paidoutid" },
        ]
      },
      {
        name: "paidoutnameid",
        using: "BTREE",
        fields: [
          { name: "paidoutnameid" },
        ]
      },
      {
        name: "businessname",
        using: "BTREE",
        fields: [
          { name: "businessname" },
        ]
      },
      {
        name: "businessaddress",
        using: "BTREE",
        fields: [
          { name: "businessaddress" },
        ]
      },
      {
        name: "businesstin",
        using: "BTREE",
        fields: [
          { name: "businesstin" },
        ]
      },
      {
        name: "vatstatus",
        using: "BTREE",
        fields: [
          { name: "vatstatus" },
        ]
      },
    ]
  });
};
