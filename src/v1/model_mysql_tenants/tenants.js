'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tenants = sequelize.define(
    'Tenants',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: require('sequelize').UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    }
  );

  Tenants.associate = function (models) {
    Tenants.hasMany(models.Refresh_tokens, {
      foreignKey: 'tenants_id',
      target: 'id',
    });

    Tenants.hasMany(models.Tenants_companies, {
      foreignKey: 'tenants_id',
      target: 'id',
    });
  };

  return Tenants;
};
