const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discgroupsitems_2', {
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discperc: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    maxqty: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "max qty with discount per month"
    },
    maxamt: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "max discount amount per month"
    }
  }, {
    sequelize,
    tableName: 'discgroupsitems_2',
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
        name: "discperc",
        using: "BTREE",
        fields: [
          { name: "discperc" },
        ]
      },
      {
        name: "maxqty",
        using: "BTREE",
        fields: [
          { name: "maxqty" },
        ]
      },
      {
        name: "maxamt",
        using: "BTREE",
        fields: [
          { name: "maxamt" },
        ]
      },
    ]
  });
};
