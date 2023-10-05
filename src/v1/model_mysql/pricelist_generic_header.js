const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pricelist_generic_header', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contactinfo: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    isvat: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    dateupdated: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pricelist_generic_header',
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
    ]
  });
};
