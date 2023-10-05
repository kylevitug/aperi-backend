const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session_readings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    previous: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    current: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    printcount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    eodcounter: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employeeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    terminalid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cashdeposited: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0.00
    },
    datemodified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'session_readings',
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
    ]
  });
};
