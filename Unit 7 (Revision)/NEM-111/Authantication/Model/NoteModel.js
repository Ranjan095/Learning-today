/** @format */

let mongoose = require("mongoose");

let noteSchema = mongoose.Schema(
  {
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    discription: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
  },
  { versionKey: false }
);

let NoteMode = mongoose.model("note", noteSchema);

module.exports = { NoteMode };
