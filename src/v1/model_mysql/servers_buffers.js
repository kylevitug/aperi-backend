const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servers_buffers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    minimumdays: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    maximumdays: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'servers_buffers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "minimumdays",
        using: "BTREE",
        fields: [
          { name: "minimumdays" },
        ]
      },
      {
        name: "maximumdays",
        using: "BTREE",
        fields: [
          { name: "maximumdays" },
        ]
      },
    ]
  });
};
