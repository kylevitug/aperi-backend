'use strict';
module.exports = (sequelize, DataTypes) => {
const Companies = sequelize.define(
'Companies', { 
   id: {
      type: DataTypes.UUID, 
      primaryKey:true, 
      allowNull:false,
      defaultValue: require('sequelize').UUIDV4
   }, 
   name: {
      type: DataTypes.STRING, 
      unique:true
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

Companies.associate = function(models) {
Companies.hasMany(models.Tenants_companies, {
 foreignKey: 'companies_id',
 target: 'id'
});

Companies.hasMany(models.Roles, {
 foreignKey: 'companies_id',
 target: 'id'
});


}

return Companies;
};
