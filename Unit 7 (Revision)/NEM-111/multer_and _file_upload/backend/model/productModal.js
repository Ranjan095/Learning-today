/** @format */

let mongoose = require("mongoose");

let proSchema = mongoose.Schema({
  title: String,
  price: Number,
  color: String,
});

let ProModal = mongoose.model("product", proSchema);

module.exports = { ProModal };
