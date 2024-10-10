const services = require('./services');

const login = async (req, res) => {
  const { user, pwd, serverid } = req.body;
  const data = await services.login(user, pwd, serverid);
  if (!data.length) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  if (data[0].password === pwd) {
    let { password, ...cleanData } = data[0];
    return res.json(cleanData);
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = {
  login,
};
