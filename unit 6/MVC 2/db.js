/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

let connection = mongoose.connect(process.env.mongoDB);

module.exports = { connection };
