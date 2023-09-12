/** @format */

import mongoose from "mongoose";
let { ObjectId } = mongoose.Schema.Types;
let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  myTask: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "tasks" }],
  },
});

export let UserModal =
  mongoose.models.users || mongoose.model("users", userSchema);


