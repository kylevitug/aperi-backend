const services = require('./services');

const login = async (req, res) => {
  const requiredFields = ['user', 'pwd', 'serverid'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }

  const { user, pwd, serverid } = req.body;
  const data = await services.login(user, pwd, serverid);

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
