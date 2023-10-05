const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promogroupsitems', {
    promogroupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lineid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    tableName: 'promogroupsitems',
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
        name: "promogroupid",
        using: "BTREE",
        fields: [
          { name: "promogroupid" },
          { name: "productid" },
        ]
      },
    ]
  });
};
