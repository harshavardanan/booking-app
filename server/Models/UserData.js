const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bookedDate: {
    type: Date,
    default: Date.now,
  },
  bookedVehicle: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("UserData", userSchema);
