const services = require('./services');

async function getAllEmployees(req, res) {
  const { hostIp } = req.body;
  if (!hostIp) {
    return res.status(400).json({ message: 'Host IP is required' });
  }

  try {
    const employees = await services.getAllEmployees(hostIp);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllEmployees,
};
