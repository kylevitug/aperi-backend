const services = require('./services');

const EXPECTED_ROW_LENGTH = 8;
const REQUIRED_FIELDS = [
  'invoice_id',
  'supplier_code',
  'product_name',
  'price',
  'quantity',
  'total',
];

const isMissingRequiredValue = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim() === '');

const normalizeOptionalValue = (value) => {
  if (value === undefined || value === null) {
    return null;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return null;
  }

  return value;
};

const buildValidationError = (reason, rowIndex) => {
  const error = {
    error: 'Invalid request body',
    reason,
  };

  if (rowIndex !== undefined) {
    error.rowIndex = rowIndex;
  }

  return error;
};

const validateCreatePayload = (payload) => {
  if (!Array.isArray(payload)) {
    return { error: buildValidationError('Request body must be an array.') };
  }

  if (!payload.length) {
    return {
      error: buildValidationError('Request body must contain at least one row.'),
    };
  }

  const normalizedRows = [];

  for (let index = 0; index < payload.length; index += 1) {
    const row = payload[index];

    if (!Array.isArray(row)) {
      return {
        error: buildValidationError('Each row must be an array.', index),
      };
    }

    if (row.length !== EXPECTED_ROW_LENGTH) {
      return {
        error: buildValidationError(
          'Each row must contain exactly 8 values.',
          index
        ),
      };
    }

    for (let fieldIndex = 0; fieldIndex < REQUIRED_FIELDS.length; fieldIndex += 1) {
      if (isMissingRequiredValue(row[fieldIndex])) {
        return {
          error: buildValidationError(
            `${REQUIRED_FIELDS[fieldIndex]} is required.`,
            index
          ),
        };
      }
    }

    if (Number.isNaN(Number(row[0]))) {
      return {
        error: buildValidationError('invoice_id must be numeric-like.', index),
      };
    }

    normalizedRows.push([
      Number(row[0]),
      row[1],
      row[2],
      row[3],
      row[4],
      row[5],
      normalizeOptionalValue(row[6]),
      normalizeOptionalValue(row[7]),
    ]);
  }

  return { rows: normalizedRows };
};

const getAllData = async (req, res) => {
  try {
    const data = await services.getAllData();
    res.json(data);
  } catch (error) {
    console.error('Error ', error);
    res
      .status(500)
      .json({ error: 'Failed to fetch purchase header autoencoder lines.' });
  }
};

const create = async (req, res) => {
  const validation = validateCreatePayload(req.body);

  if (validation.error) {
    return res.status(400).json(validation.error);
  }

  try {
    const response = await services.create(validation.rows);
    res.json(response);
  } catch (error) {
    console.error('Error ', error);
    res
      .status(500)
      .json({ error: 'Failed to insert purchase header autoencoder lines.' });
  }
};

module.exports = {
  getAllData,
  create,
};
