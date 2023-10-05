const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeestime', {
    logid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    logtime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    logtype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1=in,0=out"
    }
  }, {
    sequelize,
    tableName: 'employeestime',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "logid" },
        ]
      },
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "employeeid" },
          { name: "logtime" },
          { name: "logtype" },
        ]
      },
    ]
  });
};
