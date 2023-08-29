/** @format */

let mongoose = require("mongoose");

let empScheema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: {
      type: String,
      required: true,
      enum: ["full-stack-developer", "prompt-engineer"],
    },
  },
  { versionKey: false, timestamps: true }
);

let EmpModel = mongoose.model("employee", empScheema);

module.exports = { EmpModel };
