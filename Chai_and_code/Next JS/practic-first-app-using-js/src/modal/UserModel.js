/** @format */

import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export let UserModel =
  mongoose.models.user || mongoose.model("user", userSchema);
