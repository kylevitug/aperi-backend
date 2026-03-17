const crypto = require('crypto');

const getHeaderValue = (headerValue) => {
  if (Array.isArray(headerValue)) {
    return headerValue[0];
  }

  return headerValue;
};

const safeCompare = (providedKey, expectedKey) => {
  const providedBuffer = Buffer.from(providedKey, 'utf8');
  const expectedBuffer = Buffer.from(expectedKey, 'utf8');

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(providedBuffer, expectedBuffer);
};

const requireApiKey = (req, res, next) => {
  const expectedApiKey = process.env.SUPPLIER_ENCODER_CREDENTIALS_API_KEY;

  if (!expectedApiKey) {
    return res.status(500).json({
      error: 'Supplier encoder credentials API key is not configured.',
    });
  }

  const providedApiKey = getHeaderValue(req.headers['x-api-key']);

  if (!providedApiKey || !safeCompare(providedApiKey, expectedApiKey)) {
    return res.status(401).json({
      error: 'Invalid API key.',
    });
  }

  return next();
};

module.exports = requireApiKey;
