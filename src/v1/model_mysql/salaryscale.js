const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaryscale', {
    salaryscaleid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    salarygradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yearstart: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    yearend: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    rate: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'salaryscale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "salaryscaleid" },
        ]
      },
    ]
  });
};
