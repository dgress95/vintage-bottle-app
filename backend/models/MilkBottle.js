const mongoose = require("mongoose");

const milkBottleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: false },
  size: { type: String, required: true },
  photo: { type: String, required: false },
});

module.exports = mongoose.model("MilkBottle", milkBottleSchema);
