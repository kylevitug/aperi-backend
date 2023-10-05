const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliergrouplist', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    headerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filtertypemode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1=include, 0=exclude"
    },
    filtertypename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Suppliers, Divisions, Departments, Status, Etc..."
    },
    filtertypevalue: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "List of IDs to use in where"
    }
  }, {
    sequelize,
    tableName: 'suppliergrouplist',
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
        name: "filtertypeid",
        using: "BTREE",
        fields: [
          { name: "filtertypemode" },
        ]
      },
      {
        name: "filtertypename",
        using: "BTREE",
        fields: [
          { name: "filtertypename" },
        ]
      },
      {
        name: "filtertypevalue",
        using: "BTREE",
        fields: [
          { name: "filtertypevalue" },
        ]
      },
      {
        name: "headerid",
        using: "BTREE",
        fields: [
          { name: "headerid" },
        ]
      },
    ]
  });
};
