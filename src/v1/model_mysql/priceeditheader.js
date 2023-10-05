const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('priceeditheader', {
    priceeditheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    effectivitydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uneditable: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'priceeditheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "priceeditheaderid" },
        ]
      },
      {
        name: "effectivitydate",
        using: "BTREE",
        fields: [
          { name: "effectivitydate" },
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
        name: "memo",
        using: "BTREE",
        fields: [
          { name: "memo" },
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
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
      {
        name: "groupid",
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "uneditable",
        using: "BTREE",
        fields: [
          { name: "uneditable" },
        ]
      },
    ]
  });
};
