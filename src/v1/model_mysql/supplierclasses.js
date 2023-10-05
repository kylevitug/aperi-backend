const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplierclasses', {
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    discount: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    invoiceformat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    discountbeforevat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    parentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    leadtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 7
    },
    orderfrequency: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 7
    },
    safetystock: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 7
    },
    contactone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phoneone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contacttwo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phonetwo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailtwo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contactthree: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phonethree: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emailthree: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companyname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companyaddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companynumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    companyfax: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    terms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'supplierclasses',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "discount",
        using: "BTREE",
        fields: [
          { name: "discount" },
        ]
      },
      {
        name: "parentid",
        using: "BTREE",
        fields: [
          { name: "parentid" },
        ]
      },
    ]
  });
};
