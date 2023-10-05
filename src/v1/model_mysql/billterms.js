const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billterms', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "name"
    },
    isinactive: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    isstandard: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    duewithin1: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    discperc1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    discifpaid1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    isdatedriven: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    netduebeforethe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    duenextifbeforethe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    discperc2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    discifpaid2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'billterms',
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
        name: "isinactive",
        using: "BTREE",
        fields: [
          { name: "isinactive" },
        ]
      },
    ]
  });
};
