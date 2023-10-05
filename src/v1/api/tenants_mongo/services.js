// const Tenant = require('../../model/Tenant');
const Tenant = require('../../model_mongoose/Tenants');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const createNewTenant = async (newTenant) => {
  const { email, password } = newTenant;
  const hashedPassword = await bcrypt.hash(password, 10);
  const tenant = await Tenant.create({
    email: email,
    password: hashedPassword,
  });
  if (tenant) {
    const { password, ...tenantResponse } = tenant._doc;
    return tenantResponse;
  }
};

const getOneTenandById = async (id) => {
  const tenant = await Tenant.findById(id).exec();
  return tenant;
};

const getOneTenant = async (params) => {
  const tenant = await Tenant.findOne(params).exec();
  return tenant;
};

const getOneTenantByEmail = async (email) => {
  const tenant = await Tenant.findOne({ email: email }).exec();
  return tenant;
};

const getOneTenantByToken = async (refreshToken) => {
  const tenant = await Tenant.findOne({ refreshToken }).exec();
  return tenant;
};

module.exports = {
  createNewTenant,
  getOneTenantByEmail,
  getOneTenantByToken,
  getOneTenant,
  getOneTenandById,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};
