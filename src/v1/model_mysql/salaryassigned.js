const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaryassigned', {
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    salarygradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'salaryassigned',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeeid" },
        ]
      },
    ]
  });
};
