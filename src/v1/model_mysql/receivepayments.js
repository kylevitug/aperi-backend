const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receivepayments', {
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    saleheaderid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentmodeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentamount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sessioncounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eodcounter: {
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
    },
    memo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paymentsreceived: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'receivepayments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "paymentmodeid",
        using: "BTREE",
        fields: [
          { name: "paymentmodeid" },
        ]
      },
    ]
  });
};
