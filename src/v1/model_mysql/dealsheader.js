const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dealsheader', {
    dealsheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dealname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    begindate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    enddate: {
      type: DataTypes.DATEONLY,
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
    }
  }, {
    sequelize,
    tableName: 'dealsheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dealsheaderid" },
        ]
      },
      {
        name: "begindate",
        using: "BTREE",
        fields: [
          { name: "begindate" },
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
        name: "supplierid",
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
    ]
  });
};
