/** @format */

const { PostModle } = require("../models/post.modle");
const express = require("express");
const postRoute = express.Router();

postRoute.post("/add", async (req, res) => {
  try {
    const post = new PostModle(req.body);
    await post.save();
    res.status(200).send({ msg: "post is added" });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

postRoute.get("/", async (req, res) => {
  const { page } = req.query || 1;
  const skip = (page - 1) * 2;

  try {
    const user = await PostModle.find({ authorId: req.body.authorId })
      .skip(skip)
      .limit(2);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});
postRoute.patch("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostModle.findOne({ _id: id });
    if (post.authorId !== req.body.authorId) {
      res
        .status(200)
        .send({ msg: "your are not a authorized person to update it" });
    } else {
      await PostModle.findByIdAndUpdate({ _id: id }, req.body);
      res.status(200).send({ msg: "note is updated" });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

postRoute.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const post = await PostModle.findOne({ _id: id });
      if (post.authorId !== req.body.authorId) {
        res
          .status(200)
          .send({ msg: "your are not a authorized person to delete it" });
      } else {
        await PostModle.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "note is deleted" });
      }
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  });

module.exports = { postRoute };
