const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('journalline2_adjustment_log', {
    journalline2_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    original_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    adjusted_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'journalline2_adjustment_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "journalline2_list_id" },
        ]
      },
      {
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
        ]
      },
    ]
  });
};
