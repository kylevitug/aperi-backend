const services = require('./services');

const getSupplierEncoderCredentials = async (req, res) => {
  try {
    const supplierEncoderCredentials =
      await services.getSupplierEncoderCredentials();

    res.set('Cache-Control', 'no-store');
    res.json(supplierEncoderCredentials);
  } catch (error) {
    console.error('Error fetching supplier encoder credentials.', error);
    res.status(500).json({
      error: 'Failed to fetch supplier encoder credentials.',
    });
  }
};

module.exports = {
  getSupplierEncoderCredentials,
};
