const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('query_sync', {
    queryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    queryval: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    querystatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    querycreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    querymodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    queryserver: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    querymemo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'query_sync',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "queryid" },
        ]
      },
      {
        name: "querystatus",
        using: "BTREE",
        fields: [
          { name: "querystatus" },
        ]
      },
      {
        name: "queryserver",
        using: "BTREE",
        fields: [
          { name: "queryserver" },
        ]
      },
      {
        name: "querymemo",
        using: "BTREE",
        fields: [
          { name: "querymemo" },
        ]
      },
    ]
  });
};
