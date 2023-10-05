const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers2', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contactname: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    contactnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    emailaddress: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'suppliers2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "supplierid" },
        ]
      },
      {
        name: "contactname",
        using: "BTREE",
        fields: [
          { name: "contactname" },
        ]
      },
      {
        name: "contactnumber",
        using: "BTREE",
        fields: [
          { name: "contactnumber" },
        ]
      },
      {
        name: "emailaddress",
        using: "BTREE",
        fields: [
          { name: "emailaddress" },
        ]
      },
    ]
  });
};
