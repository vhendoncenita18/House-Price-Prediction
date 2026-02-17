const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  title: String,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number, // square meters
  price: Number,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model("House", houseSchema);
