const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promogroups', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    activepromo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datestart: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateend: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    minimumtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    couponmultiple: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    maximumcoupon: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    msg1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    msg2: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    msg3: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    msg4: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'promogroups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "activepromo",
        using: "BTREE",
        fields: [
          { name: "activepromo" },
          { name: "datestart" },
          { name: "dateend" },
          { name: "minimumtotal" },
        ]
      },
      {
        name: "couponmultiple",
        using: "BTREE",
        fields: [
          { name: "couponmultiple" },
          { name: "maximumcoupon" },
          { name: "msg1" },
          { name: "msg2" },
          { name: "msg3" },
          { name: "msg4" },
        ]
      },
    ]
  });
};
