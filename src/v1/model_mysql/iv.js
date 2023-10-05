const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iv', {
    ed: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    val: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'iv',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ed" },
        ]
      },
    ]
  });
};
