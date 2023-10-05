const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale_order_numbering', {
    customer_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lane_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "1=regular,2=senior"
    },
    eodcounter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cycle_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    sale_order_number_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_recalled: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    customer_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=open,1=closed,2=void"
    }
  }, {
    sequelize,
    tableName: 'sale_order_numbering',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_number" },
          { name: "eodcounter" },
          { name: "lane_type" },
          { name: "cycle_count" },
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
        name: "date_recalled",
        using: "BTREE",
        fields: [
          { name: "date_recalled" },
        ]
      },
      {
        name: "customer_status",
        using: "BTREE",
        fields: [
          { name: "customer_status" },
        ]
      },
      {
        name: "sale_order_number_id",
        using: "BTREE",
        fields: [
          { name: "sale_order_number_id" },
        ]
      },
    ]
  });
};
