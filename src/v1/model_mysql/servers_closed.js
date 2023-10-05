const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servers_closed', {
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    server_closed_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'servers_closed',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "server_id" },
        ]
      },
    ]
  });
};
