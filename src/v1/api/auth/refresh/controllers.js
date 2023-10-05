const Tenant = require('../../../model/Tenant');
const tenantServices = require('../../tenants/services');
const loginServices = require('../login/services');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV === 'dev' ? false : true,
  });
  const foundTenantArray = await loginServices.getRefreshTokensByRefreshToken(
    refreshToken
  );
  const foundTenant = foundTenantArray[0];
  if (!foundTenant) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.sendStatus(403); //Forbidden
        // Delete refresh tokens of hacked user
        const hackedUser = await loginServices.deleteAllRefreshTokensByTenantId(
          decoded.tenantId
        );
      }
    );
    return res.sendStatus(403); //Forbidden
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        // expired refresh token
        await loginServices.deleteRefreshTokensByRefreshToken(refreshToken);
      }
      if (err || foundTenant.tenantId !== decoded.tenantId) {
        return res.sendStatus(403);
      }
      //TODO ADD ROLES HERE IN ACCESS TOKENS
      const permissions = await tenantServices.getPermissionsByTenantId(
        foundTenant.tenantId
      );
      const accessToken = jwt.sign(
        {
          permissions: permissions,
          tenantId: foundTenant.tenantId,
          email: foundTenant.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );
      const newRefreshToken = jwt.sign(
        {
          tenantId: foundTenant.tenantId,
          email: foundTenant.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
      );
      // Saving refreshToken with current user
      await loginServices.createNewRefreshToken({
        tenantId: foundTenant.tenantId,
        refreshToken: newRefreshToken,
      });
      // Delete old refresh token
      await loginServices.deleteRefreshTokensByRefreshToken(refreshToken);
      // Creates Secure Cookie with refresh token
      res.cookie('jwt', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'dev' ? false : true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
    }
  );
};

const handleRefreshTokenOld = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV === 'dev' ? false : true,
  });
  // const foundTenant = await tenantServices.getOneTenantByToken(refreshToken);
  const foundTenant = await Tenant.findOne({ refreshToken }).exec();
  console.log(
    '🚀 ~ file: controllers.js:16 ~ handleRefreshToken ~ foundTenant:',
    foundTenant
  );
  // Detected refresh token reuse!
  if (!foundTenant) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.sendStatus(403); //Forbidden
        console.log('attempted refresh token reuse!');
        // Delete refresh tokens of hacked user
        const hackedUser = await Tenant.findOne({
          id: decoded.id,
          email: decoded.email,
        }).exec();
        console.log(hackedUser);
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();
        console.log(result);
      }
    );
    return res.sendStatus(403); //Forbidden
  }

  const newRefreshTokenArray = foundTenant.refreshToken.filter(
    (rt) => rt !== refreshToken
  );

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        // expired refresh token
        console.log('expired refresh token!');
        foundTenant.refreshToken = [...newRefreshTokenArray];
        const result = await foundTenant.save();
      }
      if (err || foundTenant.email !== decoded.email)
        return res.sendStatus(403);

      // Refresh token was still valid
      const roles = Object.values(foundTenant.roles);
      //TODO ADD ROLES HERE
      const accessToken = jwt.sign(
        {
          id: decoded.id,
          email: decoded.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );

      const newRefreshToken = jwt.sign(
        {
          id: foundTenant.id,
          email: foundTenant.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
      );
      // Saving refreshToken with current user
      foundTenant.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundTenant.save();

      // Creates Secure Cookie with refresh token
      res.cookie('jwt', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'dev' ? false : true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken });
    }
  );
};

module.exports = { handleRefreshToken };
