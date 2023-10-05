const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checknumbers', {
    bankid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    checknumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isassigned: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0=notassigned,1=assigned,2=void"
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
    tableName: 'checknumbers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bankid" },
          { name: "checknumber" },
        ]
      },
      {
        name: "isassigned",
        using: "BTREE",
        fields: [
          { name: "isassigned" },
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
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
    ]
  });
};
