const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discgroupsitems_multiple', {
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_multiple: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    multiple: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discgroupsitems_multiple',
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
    ]
  });
};
