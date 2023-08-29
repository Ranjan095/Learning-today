/** @format */

let mongoose = require("mongoose");

let proSchema = mongoose.Schema({
  title: String,
  price: Number,
  disc: String,
});

let ProModal = mongoose.model("proCollection",proSchema);

module.exports = { ProModal };
