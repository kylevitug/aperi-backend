const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servergroups', {
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    isinactive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'servergroups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "groupname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "groupname" },
        ]
      },
      {
        name: "isinactive",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
    ]
  });
};
