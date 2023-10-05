'use strict';
module.exports = (sequelize, DataTypes) => {
const Refresh_tokens = sequelize.define(
'Refresh_tokens', { 
   refresh_token: {
      type: DataTypes.STRING
   }, 
   tenants_id: {
      type: DataTypes.UUID, 
      allowNull:false
   }
}, { 
  timestamps: true,
  paranoid: true,
  freezeTableName: true
  }
);

Refresh_tokens.associate = function(models) {
Refresh_tokens.belongsTo(models.Tenants, {
 foreignKey: 'tenants_id',
 target: 'id'
});


}

return Refresh_tokens;
};
