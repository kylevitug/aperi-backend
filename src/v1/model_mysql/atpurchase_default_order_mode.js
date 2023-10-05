const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atpurchase_default_order_mode', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    principalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ordermode: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'atpurchase_default_order_mode',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
          { name: "principalid" },
          { name: "sourceid" },
        ]
      },
      {
        name: "ordermode",
        using: "BTREE",
        fields: [
          { name: "ordermode" },
        ]
      },
    ]
  });
};
