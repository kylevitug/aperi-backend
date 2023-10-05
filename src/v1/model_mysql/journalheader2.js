const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('journalheader2', {
    journalheaderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eodcounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    journaldate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    journaltype: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'journalheader2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "journalheaderid" },
        ]
      },
      {
        name: "eodcounter_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eodcounter" },
          { name: "sourceid" },
          { name: "journaldate" },
          { name: "journaltype" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
    ]
  });
};
