const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discgroups_log', {
    logid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discgroupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    logdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    success: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    failed: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discgroups_log',
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
    ]
  });
};
