/** @format */

let express = require("express");
const { auth } = require("../Middlewere/auth");
const { NoteMode } = require("../Model/NoteModel");

let noteRoute = express.Router();

// For reading app notes
noteRoute.get("/", auth, async (req, res) => {
  try {
    let notes = await NoteMode.find({ authorId: req.body.authorId });
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send(error);
  }
});
// For creating new note;
noteRoute.post("/create", auth, async (req, res) => {
  try {
    let newNote = new NoteMode(req.body);
    await newNote.save();
    res.status(200).send({ msg: "New note has been created" });
  } catch (error) {
    res.status(400).send(error);
  }
});
// For updating note
noteRoute.patch("/update/:noteId", auth, async (req, res) => {
  let { noteId } = req.params;
  try {
    let note = await NoteMode.findOne({ _id: noteId });
    if (note?.authorId === req.body.authorId) {
      await NoteMode.findByIdAndUpdate({ _id: noteId }, req.body);
      res
        .status(200)
        .send({ msg: `The note with id : ${noteId} has been updated` });
    } else {
      res
        .status(200)
        .send({ msg: `your are not Authorize to update this Note` });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
// For Deleating the note;
noteRoute.delete("/delete/:noteId", auth, async (req, res) => {
  let { noteId } = req.params;
  try {
    let note = await NoteMode.findOne({ _id: noteId });
    if (note.authorId === req.body.authorId) {
      await NoteMode.findByIdAndDelete({ _id: noteId });
      res
        .status(200)
        .send({ msg: `The note with id : ${noteId} has been deleted` });
    } else {
      res
        .status(200)
        .send({ msg: `your are not Authorize to delete this Note` });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { noteRoute };
