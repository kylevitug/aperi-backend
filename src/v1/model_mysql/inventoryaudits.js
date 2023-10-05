const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryaudits', {
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trxid: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    auditdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'inventoryaudits',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverid" },
          { name: "auditdate" },
        ]
      },
      {
        name: "memo",
        using: "BTREE",
        fields: [
          { name: "memo" },
        ]
      },
      {
        name: "auditdate",
        using: "BTREE",
        fields: [
          { name: "auditdate" },
        ]
      },
      {
        name: "trxid",
        using: "BTREE",
        fields: [
          { name: "trxid" },
        ]
      },
    ]
  });
};
