const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autopurchaselog', {
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minval: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    maxval: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    begdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    referenceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'autopurchaselog',
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
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
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
        name: "minval",
        using: "BTREE",
        fields: [
          { name: "minval" },
        ]
      },
      {
        name: "maxval",
        using: "BTREE",
        fields: [
          { name: "maxval" },
        ]
      },
      {
        name: "begdate",
        using: "BTREE",
        fields: [
          { name: "begdate" },
        ]
      },
      {
        name: "enddate",
        using: "BTREE",
        fields: [
          { name: "enddate" },
        ]
      },
      {
        name: "referenceid",
        using: "BTREE",
        fields: [
          { name: "referenceid" },
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
        name: "sourceid",
        using: "BTREE",
        fields: [
          { name: "sourceid" },
        ]
      },
    ]
  });
};
