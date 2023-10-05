const tenantServices = require('../../tenants/services');
const loginServices = require('../login/services');

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;
  const foundTenantArray = await loginServices.getRefreshTokensByRefreshToken(
    refreshToken
  );
  const foundTenant = foundTenantArray[0];
  if (foundTenant) {
    // Delete refreshToken in db
    await loginServices.deleteRefreshTokensByRefreshToken(refreshToken);
  }
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV === 'dev' ? false : true,
  });
  res.sendStatus(204);
};
const handleLogoutOld = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundTenant = await tenantServices.getOneTenant({ refreshToken });
  if (!foundTenant) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'None',
      secure: process.env.NODE_ENV === 'dev' ? false : true,
    });
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  foundTenant.refreshToken = foundTenant.refreshToken.filter(
    (rt) => rt !== refreshToken
  );
  const result = await foundTenant.save();
  console.log(result);

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV === 'dev' ? false : true,
  });
  res.sendStatus(204);
};

module.exports = { handleLogout };
