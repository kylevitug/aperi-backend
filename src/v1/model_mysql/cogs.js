const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cogs', {
    trxdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(22,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cogs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trxdate" },
          { name: "sourceid" },
        ]
      },
      {
        name: "amount",
        using: "BTREE",
        fields: [
          { name: "amount" },
        ]
      },
    ]
  });
};
