const services = require('./services');

const getAllBirPermits = async (req, res) => {
  const birPermits = await services.getAllBirPermits();
  res.json(birPermits);
};

const createBirPermit = async (req, res) => {
  const requiredFields = [
    'proprietorname',
    'businessname',
    'address',
    'tinnumber',
    'terminaltypeid',
    'brandname',
    'modelname',
    'serialno',
    'permitno',
    'softwarename',
    'minnumber',
    'serverid',
    'localterminalid',
    'iscancelled',
    'isactivedb',
  ];
  const missingFields = requiredFields.filter((field) => 
    req.body[field] === undefined
  );

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.createBirPermit(req);
  res.json(response);
};

const updateBirPermit = async (req, res) => {
  const requiredFields = [
    'terminalid',
    'proprietorname',
    'businessname',
    'address',
    'tinnumber',
    'terminaltypeid',
    'brandname',
    'modelname',
    'serialno',
    'permitno',
    'softwarename',
    'minnumber',
    'serverid',
    'localterminalid',
    'iscancelled',
    'isactivedb',
  ];
  const missingFields = requiredFields.filter((field) => 
    req.body[field] === undefined
  );

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.updateBirPermit(req);
  res.json(response);
};

const deleteBirPermit = async (req, res) => {
  const requiredFields = ['terminalid'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length) {
    return res.status(404).json({
      error:
        'The following required fields are missing: ' +
        missingFields.join(', '),
    });
  }
  const response = await services.deleteBirPermit(req.body);
  res.json(response);
};
module.exports = {
  getAllBirPermits,
  createBirPermit,
  updateBirPermit,
  deleteBirPermit,
};