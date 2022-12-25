const { checkSchema } = require('express-validator');

const networkVlidat = checkSchema({
  model_path: {
    isLength: {
      options: { min: 6 },
      errorMessage: 'The model path must be valid',
    },
  },
  sparsity: {
    custom: {
      options: (value) => {
        if (!(value >= 0 && value <= 1)) {
          return false;
        } else return true;
      },
      errorMessage: 'sparsity must be between 0-1',
    },
  },
  weight_compression_rate: {
    custom: {
      options: (value) => {
        if (!(value >= 0 && value <= 1)) {
          return false;
        } else return true;
      },
      errorMessage: 'weight compression rate must be between 0-1',
    },
  },
  frequency: {
    isInt: true,
    custom: {
      options: (value) => {
        if (isNaN(value) && value <= 0) {
          return false;
        } else return true;
      },
      errorMessage: 'frequency must be a number and bigger then 0',
    },
  },
  winograd: {
    isBoolean: true,
    errorMessage: 'winograd value must be boolean',
  },
  L1: {
    isInt: true,
    custom: {
      options: (value) => (value > 0 ? true : false),
    },
    errorMessage: 'L1 must be integer number and bigger then 0',
  },
  'L2.size_MB': {
    isInt: true,
    custom: {
      options: (value) => (value > 0 ? true : false),
    },
    errorMessage: 'L2 must be integer number and bigger then 0',
  },
});

module.exports = { networkVlidat };
