const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    // console.log('No token provided');
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1];
  // console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.tenantId = decoded.tenantId;
    req.permissions = decoded.permissions;
    // console.log(req.permissions);
    // req.roles = decoded.UserInfo.roles; ADD ROLES HERE
    next();
  });
};

module.exports = verifyJWT;
