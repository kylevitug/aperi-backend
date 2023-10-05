const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servers2', {
    serverid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    legal_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_propname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_serial_number: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    legal_min_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_permit_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_tin_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    legal_accreditation_number: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'servers2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "serverid" },
          { name: "legal_serial_number" },
        ]
      },
    ]
  });
};
