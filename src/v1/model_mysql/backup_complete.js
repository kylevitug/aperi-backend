const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backup_complete', {
    server_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    last_day: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    is_complete: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'backup_complete',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "server_id" },
          { name: "last_day" },
        ]
      },
      {
        name: "is_complete",
        using: "BTREE",
        fields: [
          { name: "is_complete" },
        ]
      },
    ]
  });
};
