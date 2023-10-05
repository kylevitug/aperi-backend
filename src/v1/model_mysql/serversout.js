const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serversout', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    servername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    serverip: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    serverisoffline: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    serverinfo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    classname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bankname: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'serversout',
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
        name: "servername",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "servername" },
          { name: "serverip" },
        ]
      },
      {
        name: "serverisoffline",
        using: "BTREE",
        fields: [
          { name: "serverisoffline" },
        ]
      },
    ]
  });
};
