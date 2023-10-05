const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoorderschedule', {
    listid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sourceid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    deliverydate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    actualdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    principalid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nextorderstatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0=ok,1=make next orders"
    },
    passnextdelivery: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0=no,1=pass,2=pass2"
    }
  }, {
    sequelize,
    tableName: 'autoorderschedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "listid" },
        ]
      },
      {
        name: "supplierid",
        using: "BTREE",
        fields: [
          { name: "supplierid" },
          { name: "sourceid" },
          { name: "orderdate" },
          { name: "deliverydate" },
          { name: "actualdate" },
        ]
      },
      {
        name: "principalid",
        using: "BTREE",
        fields: [
          { name: "principalid" },
        ]
      },
      {
        name: "nextorderstatus",
        using: "BTREE",
        fields: [
          { name: "nextorderstatus" },
        ]
      },
      {
        name: "passnextdelivery",
        using: "BTREE",
        fields: [
          { name: "passnextdelivery" },
        ]
      },
    ]
  });
};
