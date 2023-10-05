const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genericlist', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    genericid1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genericid10: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'genericlist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productid" },
        ]
      },
      {
        name: "genericid1",
        using: "BTREE",
        fields: [
          { name: "genericid1" },
        ]
      },
      {
        name: "genericid2",
        using: "BTREE",
        fields: [
          { name: "genericid2" },
        ]
      },
      {
        name: "genericid3",
        using: "BTREE",
        fields: [
          { name: "genericid3" },
        ]
      },
      {
        name: "genericid4",
        using: "BTREE",
        fields: [
          { name: "genericid4" },
        ]
      },
      {
        name: "genericid5",
        using: "BTREE",
        fields: [
          { name: "genericid5" },
        ]
      },
      {
        name: "genericid6",
        using: "BTREE",
        fields: [
          { name: "genericid6" },
        ]
      },
      {
        name: "genericid7",
        using: "BTREE",
        fields: [
          { name: "genericid7" },
        ]
      },
      {
        name: "genericid8",
        using: "BTREE",
        fields: [
          { name: "genericid8" },
        ]
      },
      {
        name: "genericid9",
        using: "BTREE",
        fields: [
          { name: "genericid9" },
        ]
      },
      {
        name: "genericid110",
        using: "BTREE",
        fields: [
          { name: "genericid10" },
        ]
      },
    ]
  });
};
