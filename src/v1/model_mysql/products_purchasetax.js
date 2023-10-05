const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_purchasetax', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taxid: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'products_purchasetax',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "taxid",
        using: "BTREE",
        fields: [
          { name: "taxid" },
        ]
      },
    ]
  });
};
