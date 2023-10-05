const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scd_claiming_methods', {
    claim_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    claim_method_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'scd_claiming_methods',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "claim_method_id" },
        ]
      },
    ]
  });
};
