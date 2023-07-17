/** @format */

let mongoose = require("mongoose");

let connection = mongoose.connect("mongodb://127.0.0.1:27017/ranjan_check");

let userSchema = mongoose.Schema(
  {
    name: { type: String,required:true },
    age: { type: Number,required:true },
    city: { type: String ,required:true},
  },
  { versionKey: false }
);

let UserModel = mongoose.model("user", userSchema);

module.exports = { connection, UserModel };
