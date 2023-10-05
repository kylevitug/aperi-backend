const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pricechanges', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    itemname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    um: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    oldprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    newprice: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cashierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    managerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pricechanges',
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
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
