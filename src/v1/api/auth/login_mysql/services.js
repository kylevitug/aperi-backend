const bcrypt = require('bcrypt');

const comparePassword = async (tenant, password) => {
  const match = await bcrypt.compare(password, tenant.password);
  if (match) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  comparePassword,
  // getOneWorkout,
  // createNewWorkout,
  // updateOneWorkout,
  // deleteOneWorkout,
};
