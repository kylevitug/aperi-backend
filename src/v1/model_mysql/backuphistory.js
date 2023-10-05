const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backuphistory', {
    backupid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    backupname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletestatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    backupsize: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'backuphistory',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backupid" },
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
        name: "backupname",
        using: "BTREE",
        fields: [
          { name: "backupname" },
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
        name: "backupsize",
        using: "BTREE",
        fields: [
          { name: "backupsize" },
        ]
      },
      {
        name: "deletestatus",
        using: "BTREE",
        fields: [
          { name: "deletestatus" },
        ]
      },
    ]
  });
};
