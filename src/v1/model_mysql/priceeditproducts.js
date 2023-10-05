const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('priceeditproducts', {
    listid2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    listid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    um: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    newsaleprice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    newpurchaseprice: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: false
    },
    oldsalesprice: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false
    },
    oldpurchaseprice: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'priceeditproducts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid2" },
        ]
      },
      {
        name: "listid",
        using: "BTREE",
        fields: [
          { name: "listid" },
          { name: "productid" },
          { name: "um" },
          { name: "newsaleprice" },
          { name: "newpurchaseprice" },
          { name: "oldsalesprice" },
          { name: "oldpurchaseprice" },
        ]
      },
    ]
  });
};
