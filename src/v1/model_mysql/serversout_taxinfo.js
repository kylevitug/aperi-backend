const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serversout_taxinfo', {
    id_fk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branchcode: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'serversout_taxinfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fk" },
        ]
      },
    ]
  });
};
