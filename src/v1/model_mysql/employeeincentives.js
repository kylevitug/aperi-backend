const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeeincentives', {
    billpaymentheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    percentage: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employeeincentives',
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
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
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
        name: "percentage",
        using: "BTREE",
        fields: [
          { name: "percentage" },
        ]
      },
    ]
  });
};
