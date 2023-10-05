const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billheader_vat_override', {
    billheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billvat: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00
    },
    billnonvat: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'billheader_vat_override',
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
        name: "billnonvat",
        using: "BTREE",
        fields: [
          { name: "billnonvat" },
        ]
      },
      {
        name: "billvat",
        using: "BTREE",
        fields: [
          { name: "billvat" },
        ]
      },
    ]
  });
};
