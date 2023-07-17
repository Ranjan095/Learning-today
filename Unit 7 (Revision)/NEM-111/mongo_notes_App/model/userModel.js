/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

let UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
