const { connectDbByServerId } = require('../../config/db');

const login = async (user, pwd, serverid) => {
  const qry = `SELECT employeeid, password FROM employees WHERE name = ?`;
  try {
    const db = await connectDbByServerId(serverid);
    const [rows, fields] = await db.execute(qry, [user]);
    console.log(rows);
    await db.end();
    return rows;
  } catch (error) {
    console.error('Error ', error);
  }
};

module.exports = {
  login,
};
