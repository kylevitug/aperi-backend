const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminals', {
    terminalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    machineidentifier: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'terminals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "terminalid" },
        ]
      },
      {
        name: "machineidentifier",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "machineidentifier" },
        ]
      },
    ]
  });
};
