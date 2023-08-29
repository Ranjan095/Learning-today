/** @format */

let mongoose = require("mongoose");

// for subtask schema and modal
let subTaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
      required: true,
    },
  },
  { versionKey: false }
);

let SubTaskModal = mongoose.model("subtask", subTaskSchema);

module.exports = { SubTaskModal };
