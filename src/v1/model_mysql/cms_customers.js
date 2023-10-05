const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_customers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    brgy: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contactnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "contactnumber"
    },
    gender: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cms_customers',
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
        name: "contactnumber",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contactnumber" },
        ]
      },
      {
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "brgy" },
          { name: "city" },
          { name: "birthdate" },
          { name: "gender" },
        ]
      },
    ]
  });
};
