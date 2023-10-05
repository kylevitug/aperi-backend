const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('querylog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    headerid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    serverto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    issent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-no, 1-yes"
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
    tableName: 'querylog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "serverto",
        using: "BTREE",
        fields: [
          { name: "serverto" },
          { name: "issent" },
          { name: "datecreated" },
          { name: "datemodified" },
        ]
      },
      {
        name: "headerid",
        using: "BTREE",
        fields: [
          { name: "headerid" },
        ]
      },
    ]
  });
};
