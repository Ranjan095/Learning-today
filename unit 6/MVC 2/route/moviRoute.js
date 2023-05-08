/** @format */

const express = require("express");
const { MovieModel } = require("../model/MovieModel");

const movieRouter = express.Router();

movieRouter.post("/add", async (req, res) => {
  try {
    const movie = await new MovieModel(req.body);
    movie.save();
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { movieRouter };
