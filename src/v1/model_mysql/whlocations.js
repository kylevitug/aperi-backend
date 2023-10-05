const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('whlocations', {
    whlocationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    whlocationname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    whlocationdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    whlocationindex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    length: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    width: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    height: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'whlocations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "whlocationid" },
        ]
      },
      {
        name: "whlocationname",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "whlocationname" },
        ]
      },
      {
        name: "whlocationindex",
        using: "BTREE",
        fields: [
          { name: "whlocationindex" },
        ]
      },
      {
        name: "length",
        using: "BTREE",
        fields: [
          { name: "length" },
        ]
      },
      {
        name: "width",
        using: "BTREE",
        fields: [
          { name: "width" },
        ]
      },
      {
        name: "height",
        using: "BTREE",
        fields: [
          { name: "height" },
        ]
      },
    ]
  });
};
