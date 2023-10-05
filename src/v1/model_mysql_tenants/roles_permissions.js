'use strict';
module.exports = (sequelize, DataTypes) => {
const Roles_permissions = sequelize.define(
'Roles_permissions', { 
   roles_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }, 
   permissions_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

Roles_permissions.associate = function(models) {
Roles_permissions.belongsTo(models.Roles, {
 foreignKey: 'roles_id',
 target: 'id'
});

Roles_permissions.belongsTo(models.Permissions, {
 foreignKey: 'permissions_id',
 target: 'id'
});


}

return Roles_permissions;
};
