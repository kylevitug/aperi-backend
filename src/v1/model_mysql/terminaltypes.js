const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terminaltypes', {
    terminaltypeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    terminaltypename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'terminaltypes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "terminaltypeid" },
        ]
      },
      {
        name: "terminaltypename",
        using: "BTREE",
        fields: [
          { name: "terminaltypename" },
        ]
      },
    ]
  });
};
