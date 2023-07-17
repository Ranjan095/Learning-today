/** @format */

let mongoose = require("mongoose");

let noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  authorId: { type: String, required: true },
},{versionKey:false});

let NotesModel = mongoose.model("note", noteSchema);

module.exports = { NotesModel };
