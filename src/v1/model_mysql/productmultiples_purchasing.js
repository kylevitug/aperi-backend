const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productmultiples_purchasing', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    multiple: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'productmultiples_purchasing',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
          { name: "serverid" },
        ]
      },
      {
        name: "multiple",
        using: "BTREE",
        fields: [
          { name: "multiple" },
        ]
      },
      {
        name: "serverid",
        using: "BTREE",
        fields: [
          { name: "serverid" },
        ]
      },
    ]
  });
};
