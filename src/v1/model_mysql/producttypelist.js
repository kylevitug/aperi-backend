const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('producttypelist', {
    producttypeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    producttypename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'producttypelist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "producttypeid" },
        ]
      },
      {
        name: "itemtypename",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "producttypename" },
        ]
      },
    ]
  });
};
