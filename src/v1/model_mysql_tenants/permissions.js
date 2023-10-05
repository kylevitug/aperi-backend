'use strict';
module.exports = (sequelize, DataTypes) => {
const Permissions = sequelize.define(
'Permissions', { 
   id: {
      type: DataTypes.UUID, 
      primaryKey:true, 
      allowNull:false,
      defaultValue: require('sequelize').UUIDV4
   }, 
   name: {
      type: DataTypes.STRING, 
      allowNull:false
   }, 
   value: {
      type: DataTypes.BOOLEAN, 
      allowNull:false,
      defaultValue: 0
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

return Permissions;
};
