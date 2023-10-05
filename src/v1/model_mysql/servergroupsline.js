const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servergroupsline', {
    groupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'servergroupsline',
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
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
    ]
  });
};
