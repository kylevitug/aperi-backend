const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeelevels', {
    employeelevelid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "name"
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Add_Customers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Customers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Customers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Customers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Discounts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Discounts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Discounts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Discounts: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Employee_Levels: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Employee_Levels: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Employee_Levels: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Employee_Levels: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Employees: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Employees: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Employees: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Employees: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Locations: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Locations: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Locations: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Locations: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Payment_Modes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Payment_Modes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Payment_Modes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Payment_Modes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Products: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Products: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Products: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Products: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Suppliers_Divisions_Departments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Suppliers_Divisions_Departments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Suppliers_Divisions_Departments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Suppliers_Divisions_Departments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Taxes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Terminals: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Terminals: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Terminals: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Terminals: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Inventory_Adjustments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Inventory_Adjustments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Inventory_Adjustments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Inventory_Adjustments: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Add_Purchase_Orders: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Edit_Purchases_Orders: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    View_Purchases_Orders: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Delete_Purchases_Orders: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Point_Of_Sale: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Print_X_Reading: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Print_Sales_Summary: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Reprint_Sales_Receipt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Reprint_Z_Reading: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Sales_Order_Taking: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Settings: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Reports: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employeelevels',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeelevelid" },
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
