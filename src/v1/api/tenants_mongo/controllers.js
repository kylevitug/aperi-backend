const Tenant = require('../../model/Tenant');
const bcrypt = require('bcrypt');
const services = require('./services');

const createNewTenant = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  const duplicate = await services.getOneTenantByEmail(email);
  if (duplicate) return res.sendStatus(409);

  try {
    const newTenant = {
      email: email,
      password: password,
    };
    const createdTenant = await services.createNewTenant(newTenant);
    res.status(201).json({
      message: `New user with email ${email} created!`,
      data: createdTenant,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createNewTenant };
