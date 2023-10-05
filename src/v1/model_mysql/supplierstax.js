const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplierstax', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isburdensharing: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1=yes, 0=no"
    }
  }, {
    sequelize,
    tableName: 'supplierstax',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
      {
        name: "taxid",
        using: "BTREE",
        fields: [
          { name: "taxid" },
        ]
      },
      {
        name: "isburdensharing",
        using: "BTREE",
        fields: [
          { name: "isburdensharing" },
        ]
      },
    ]
  });
};
