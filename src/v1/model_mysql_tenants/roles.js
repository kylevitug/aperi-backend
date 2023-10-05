'use strict';
module.exports = (sequelize, DataTypes) => {
const Roles = sequelize.define(
'Roles', { 
   id: {
      type: DataTypes.UUID, 
      primaryKey:true, 
      allowNull:false,
      defaultValue: require('sequelize').UUIDV4
   }, 
   name: {
      type: DataTypes.STRING
   }, 
   companies_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

Roles.associate = function(models) {
Roles.hasMany(models.Roles_permissions, {
 foreignKey: 'roles_id',
 target: 'id'
});

Roles.belongsTo(models.Companies, {
 foreignKey: 'companies_id',
 target: 'id'
});

Roles.hasOne(models.Tenants_companies, {
 foreignKey: 'roles_id',
 target: 'id'
});


}

return Roles;
};
