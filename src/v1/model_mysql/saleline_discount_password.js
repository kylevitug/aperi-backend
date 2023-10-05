const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saleline_discount_password', {
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'saleline_discount_password',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "saleheaderid" },
          { name: "employeeid" },
        ]
      },
    ]
  });
};
