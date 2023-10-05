const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billheader_vat', {
    billheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billvat: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    billnonvat: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'billheader_vat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billheaderid" },
        ]
      },
      {
        name: "billvat",
        using: "BTREE",
        fields: [
          { name: "billvat" },
        ]
      },
      {
        name: "billnonvat",
        using: "BTREE",
        fields: [
          { name: "billnonvat" },
        ]
      },
    ]
  });
};
