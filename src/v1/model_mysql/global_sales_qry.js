const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_sales_qry', {
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    totalqty: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0.00
    },
    totalsale: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'global_sales_qry',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pid" },
        ]
      },
      {
        name: "totalqty",
        using: "BTREE",
        fields: [
          { name: "totalqty" },
        ]
      },
      {
        name: "totalsale",
        using: "BTREE",
        fields: [
          { name: "totalsale" },
        ]
      },
    ]
  });
};
