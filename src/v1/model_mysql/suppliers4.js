const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers4', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ewtstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1=yes,0=no"
    },
    taxstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1=vat,2=nonvat,3=nonexpense"
    }
  }, {
    sequelize,
    tableName: 'suppliers4',
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
        name: "ewtstatus",
        using: "BTREE",
        fields: [
          { name: "ewtstatus" },
        ]
      },
      {
        name: "taxstatus",
        using: "BTREE",
        fields: [
          { name: "taxstatus" },
        ]
      },
    ]
  });
};
