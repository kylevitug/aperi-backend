const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scd_claiming', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true,
      comment: "1=supplier,2=principal"
    },
    claim_method: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0=noclaiming-nodiscount, 1=invoice,2=credit memo, 3=noclaiming-discounted"
    },
    claimer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'scd_claiming',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "id_type" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "claimer_id" },
        ]
      },
      {
        name: "date_start",
        using: "BTREE",
        fields: [
          { name: "date_start" },
        ]
      },
      {
        name: "date_created",
        using: "BTREE",
        fields: [
          { name: "date_created" },
        ]
      },
      {
        name: "date_modified",
        using: "BTREE",
        fields: [
          { name: "date_modified" },
        ]
      },
      {
        name: "claim_method",
        using: "BTREE",
        fields: [
          { name: "claim_method" },
        ]
      },
    ]
  });
};
