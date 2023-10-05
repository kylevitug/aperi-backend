const services = require('./services');

const createNewTenant = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  try {
    const newTenant = {
      email: email,
      password: password,
    };
    const createdTenant = await services.createNewTenant(newTenant);
    return res.status(201).json({
      message: `New user with email ${email} created!`,
      data: createdTenant,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.sendStatus(409);
    } else if (err.code === 'ETIMEDOUT') {
      return res.sendStatus(504);
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
};

module.exports = { createNewTenant };
