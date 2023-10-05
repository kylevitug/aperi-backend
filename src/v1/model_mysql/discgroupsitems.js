const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discgroupsitems', {
    discgroupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discamt: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    lineid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'discgroupsitems',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lineid" },
        ]
      },
      {
        name: "discamt",
        using: "BTREE",
        fields: [
          { name: "discamt" },
        ]
      },
    ]
  });
};
