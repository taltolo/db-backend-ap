const mongoose = require('mongoose');

const networkSchema = mongoose.Schema({
  DDR: {
    latency: {
      type: Number,
      default: 0,
    },
  },
  L1: {
    type: Number,
    require: true,
  },
  L2: {
    size_MB: {
      type: Number,
      require: true,
    },
    bytes_per_cycle_to_DDR: {
      type: Number,
      default: 32,
    },
  },
  model_path: {
    type: String,
    require: true,
  },
  sparsity: {
    type: Number,
    require: true,
  },
  weight_compression_rate: {
    type: Number,
    require: true,
  },
  frequency: {
    type: Number,
    require: false,
  },
  winograd: {
    type: Boolean,
    require: true,
  },
  target_cycles: {
    type: Number,
    require: false,
  },
  target_Outer_BW: {
    type: Number,
    require: false,
  },
  nightly_run: {
    type: Number,
    require: true,
  },
  CheckIn: {
    type: Number,
    require: true,
  },
  Test: {
    type: Number,
    require: true,
  },
  Weekly: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model('Networks', networkSchema);
