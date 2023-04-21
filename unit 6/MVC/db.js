/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongoURL);

// export
module.exports = { connection };
