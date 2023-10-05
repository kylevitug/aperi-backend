const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventoryoutheader_autoprint', {
    inventoryoutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isprinted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dateprinted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'inventoryoutheader_autoprint',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inventoryoutid" },
        ]
      },
      {
        name: "datemodified",
        using: "BTREE",
        fields: [
          { name: "datemodified" },
        ]
      },
      {
        name: "datecreated",
        using: "BTREE",
        fields: [
          { name: "datecreated" },
        ]
      },
      {
        name: "dateprinted",
        using: "BTREE",
        fields: [
          { name: "dateprinted" },
        ]
      },
      {
        name: "isprinted",
        using: "BTREE",
        fields: [
          { name: "isprinted" },
        ]
      },
    ]
  });
};
