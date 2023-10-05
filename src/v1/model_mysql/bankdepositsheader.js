const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankdepositsheader', {
    depositdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    depositamount: {
      type: DataTypes.FLOAT(22,2),
      allowNull: false
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 uncleared, 1 cleared"
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'bankdepositsheader',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "depositdate" },
          { name: "sourceid" },
        ]
      },
      {
        name: "datemodifiied",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
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
        name: "depositamount",
        using: "BTREE",
        fields: [
          { name: "depositamount" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
