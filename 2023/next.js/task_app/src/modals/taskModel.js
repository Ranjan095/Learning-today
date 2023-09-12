/** @format */

import mongoose from "mongoose";

let { ObjectId } = mongoose.Schema.Types;

let taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "progress", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: ObjectId,
    required: true,
  },
});

export let TaskModal =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);
