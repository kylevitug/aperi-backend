const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankdepositsline', {
    depositdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    depositbranch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    depositamount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'bankdepositsline',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
          { name: "sourceid" },
        ]
      },
      {
        name: "depositdate",
        using: "BTREE",
        fields: [
          { name: "depositdate" },
        ]
      },
      {
        name: "depositbranch",
        using: "BTREE",
        fields: [
          { name: "depositbranch" },
        ]
      },
      {
        name: "depositamount",
        using: "BTREE",
        fields: [
          { name: "depositamount" },
        ]
      },
      {
        name: "sourceid",
        using: "BTREE",
        fields: [
          { name: "sourceid" },
        ]
      },
    ]
  });
};
