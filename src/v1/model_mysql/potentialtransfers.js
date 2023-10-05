const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('potentialtransfers', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    filtertype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "1=hide, 2=transferred"
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
    tableName: 'potentialtransfers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
          { name: "serverid" },
          { name: "filtertype" },
        ]
      },
      {
        name: "filtertype",
        using: "BTREE",
        fields: [
          { name: "filtertype" },
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
