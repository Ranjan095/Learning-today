/** @format */

let mongoose = require("mongoose");

let subTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
});

let taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Todo", "Doing", "Done"],
    default: "Todo",
  },
  subtasks: { type: [subTaskSchema], required: true, ref: "Subtask" },
});

let bordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tasks: { type: [taskSchema], ref: "Task", required: true },
  },
  { versionKey: false }
);

let BordModal = mongoose.model("bord", bordSchema);

module.exports = { BordModal };
