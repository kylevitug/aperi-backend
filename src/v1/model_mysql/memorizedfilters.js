const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('memorizedfilters', {
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
    froms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    wheres: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    servers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fromdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    todate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    isadjusting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    daysdeducted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'memorizedfilters',
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
    ]
  });
};
