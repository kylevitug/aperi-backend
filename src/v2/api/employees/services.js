const { getDatabaseConnection } = require('../../config/db');
const { getDatabaseConnectionByServerId } = require('../../config/db');

async function getAllEmployees(hostIp) {
  const db = await getDatabaseConnection(hostIp);
  try {
    const [rows] = await db.query('SELECT * FROM employees');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  } finally {
    db.end();
  }
}

module.exports = {
  getAllEmployees,
};
