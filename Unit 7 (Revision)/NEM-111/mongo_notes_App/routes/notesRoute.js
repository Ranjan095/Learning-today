/** @format */

let express = require("express");
const { auth } = require("../middlewere/auth");
const { NotesModel } = require("../model/notesModel");

let notesRout = express.Router();

notesRout.get("/", auth, async (req, res) => {
  try {
    let notes = await NotesModel.find({ authorId: req.body.authorId });
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});

notesRout.post("/create", auth, async (req, res) => {
  try {
    let newNote = new NotesModel(req.body);
    await newNote.save();
    res.status(200).send({ msg: "New note has been create" });
  } catch (error) {
    res.status(400).send(error);
  }
});

notesRout.patch("/update/:noteId", auth, async (req, res) => {
  let { noteId } = req.params;
  try {
    let note = await NotesModel.findOne({ _id: noteId });
    if (note.authorId === req.body.authorId) {
      await NotesModel.findByIdAndUpdate({ _id: noteId }, req.body);
      res.status(200).send({ msg: "note has been updated" });
    } else {
      res.status(200).send({ msg: "you are not authorize to update this doc" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

notesRout.delete("/delete/:noteId", auth, async (req, res) => {
  let { noteId } = req.params;
  try {
    let note = await NotesModel.findOne({ _id: noteId });
    if (note.authorId === req.body.authorId) {
      await NotesModel.findByIdAndDelete({ _id: noteId });
      res.status(200).send({ msg: "note has been deleted" });
    } else {
      res.status(200).send({ msg: "You are not authorize to delete this doc" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { notesRout };
