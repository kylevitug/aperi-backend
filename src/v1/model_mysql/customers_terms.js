const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers_terms', {
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    default_terms: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customers_terms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customerid" },
        ]
      },
      {
        name: "default_terms",
        using: "BTREE",
        fields: [
          { name: "default_terms" },
        ]
      },
    ]
  });
};
