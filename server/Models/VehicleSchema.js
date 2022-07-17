const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    unique: true,
    required: true,
  },
  wheels: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("vehicle", vehicleSchema);
