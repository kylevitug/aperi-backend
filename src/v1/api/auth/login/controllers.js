// const User = require('../src/model/User');
const Tenant = require('../../../model/Tenant');
const tenantServices = require('../../tenants/services');
const services = require('./services');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  try {
    const cookies = req.cookies;
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: 'Username and password are required.' });
    const tenantArray = await tenantServices.getOneTenantByEmail(email);
    const tenant = tenantArray[0];
    if (!tenant) return res.sendStatus(401);
    const match = await services.comparePassword(tenant, password);
    if (match) {
      const permissions = await tenantServices.getPermissionsByTenantId(
        tenant.tenantId
      );
      const accessToken = jwt.sign(
        {
          permissions: permissions,
          tenantId: tenant.tenantId,
          email: tenant.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );
      const newRefreshToken = jwt.sign(
        {
          tenantId: tenant.tenantId,
          email: tenant.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
      );

      if (cookies?.jwt) {
        const refreshToken = cookies.jwt;
        const foundTokenArray = await services.getRefreshTokensByRefreshToken(
          refreshToken
        );
        const foundToken = foundTokenArray[0];
        if (!foundToken) {
          await services.deleteAllRefreshTokensByTenantId(tenant.tenantId);
        }
        res.clearCookie('jwt', {
          httpOnly: true,
          sameSite: 'None',
          secure: process.env.NODE_ENV === 'dev' ? false : true,
        });
      }
      console.log(tenant.tenantId, newRefreshToken);
      const result = await services.createNewRefreshToken({
        tenantId: tenant.tenantId,
        refreshToken: newRefreshToken,
      });

      res.cookie('jwt', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'dev' ? false : true,
        sameSite: 'None',
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
  }
};

const handleLoginOld = async (req, res) => {
  const cookies = req.cookies;
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  const tenant = await tenantServices.getOneTenant({ email });
  console.log(tenant);
  // const foundUser = await User.findOne({ username: user }).exec();
  if (!tenant) return res.sendStatus(401); //Unauthorized
  // evaluate password
  // const match = await bcrypt.compare(pwd, foundUser.password);
  const match = await services.comparePassword(tenant, password);
  if (match) {
    console.log(tenant);
    // const roles = Object.values(tenant.roles).filter(Boolean);
    // create JWTs
    const accessToken = jwt.sign(
      {
        id: tenant.tenantId,
        email: tenant.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    const newRefreshToken = jwt.sign(
      {
        id: tenant.tenantId,
        email: tenant.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    // Changed to let keyword
    let newRefreshTokenArray = !cookies?.jwt
      ? tenant.refreshToken
      : tenant.refreshToken.filter((rt) => rt !== cookies.jwt);

    if (cookies?.jwt) {
      /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
      const refreshToken = cookies.jwt;
      const foundToken = await tenantServices.getOneTenant({ refreshToken });
      // const foundToken = await User.findOne({ refreshToken }).exec();

      // Detected refresh token reuse!
      if (!foundToken) {
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
      }

      res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'None',
        secure: process.env.NODE_ENV === 'dev' ? false : true,
      });
    }

    // Saving refreshToken with current user
    tenant.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await tenant.save();

    // Creates Secure Cookie with refresh token
    res.cookie('jwt', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'dev' ? false : true,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
