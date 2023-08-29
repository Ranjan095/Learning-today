/** @format */

let mongoose = require("mongoose");

let bordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    task: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "task",
      required: true,
    },
  },
  { versionKey: false }
);

let BordModal = mongoose.model("board", bordSchema);

module.exports = { BordModal };
