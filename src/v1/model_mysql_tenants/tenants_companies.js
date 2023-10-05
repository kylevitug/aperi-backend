'use strict';
module.exports = (sequelize, DataTypes) => {
const Tenants_companies = sequelize.define(
'Tenants_companies', { 
   tenants_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }, 
   companies_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }, 
   roles_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

Tenants_companies.associate = function(models) {
Tenants_companies.belongsTo(models.Tenants, {
 foreignKey: 'tenants_id',
 target: 'id'
});

Tenants_companies.belongsTo(models.Companies, {
 foreignKey: 'companies_id',
 target: 'id'
});


}

return Tenants_companies;
};
