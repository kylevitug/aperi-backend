const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scd_per_month_supplierid', {
    trx_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    is_invoiced: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'scd_per_month_supplierid',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trx_date" },
          { name: "supplier_id" },
          { name: "serverid" },
        ]
      },
      {
        name: "amount",
        using: "BTREE",
        fields: [
          { name: "amount" },
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
        name: "is_invoiced",
        using: "BTREE",
        fields: [
          { name: "is_invoiced" },
        ]
      },
    ]
  });
};
