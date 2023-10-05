const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bill_instruction', {
    billnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    billcreditnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'bill_instruction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "billnumber" },
          { name: "billcreditnumber" },
        ]
      },
    ]
  });
};
