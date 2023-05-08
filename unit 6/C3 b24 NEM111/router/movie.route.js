/** @format */

const express = require("express");
const movieRoute = express.Router();
const { movieModel } = require("../model/movie.model");
const fs=require("fs");
const { validate } = require("../middleware/validate");



movieRoute.post("/add",validate, async (req, res) => {
  try {
    const movie = await new movieModel(req.body);
    movie.save();
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
});
movieRoute.get("/",async (req, res) => {
  try {
    let movie = await movieModel.find();
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
});

// search by ID///
movieRoute.get("/search/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const movie = await movieModel.find({ _id: id });
    res.send(movie);
  } catch (err) {
    console.log(err);
  }
});
// filter by rating between MIN-MAX////
movieRoute.get("/between", async (req, res) => {
  let { min, max } = req.query;
  try {
    let movie = await movieModel.find({
      $and: [{ rating: { $gt: min } }, { rating: { $lt: max } }],
    });
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
});

// filter by genre///
movieRoute.get("/genre", async (req, res) => {
  let { genre } = req.query;
  try {
    let movie = await movieModel.find({ genre: genre });
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
});
// filter by above of "year_of_release"  ///
movieRoute.get("/aboveYear", async (req, res) => {
  let { year } = req.query;
  try {
    let movie = await movieModel.find({ year_of_release: { $gt: year } });
    res.send(movie);
  } catch (err) {
    res.send(err);
  }
});

// update movie data///
movieRoute.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await movieModel.findByIdAndUpdate({ _id: id }, req.body);
    fs.appendFileSync("./text.txt",`this movie with id:${id} updated | ${Date()}`)
    res.send("movie data updated");
  } catch (err) {
    res.send(err);
  }
});

// Delete Movie data///
movieRoute.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await movieModel.findByIdAndDelete({ _id: id });
    res.send("movie data is deleted");
  } catch (err) {
    res.send(err);
  }
});
// Pagination////
movieRoute.get("/paginat", async (req, res) => {
  let page = +req.query.page || 1;
  let limit = +req.query.limit || 2;
  let skip = (page - 1) * limit;
  try {
    let movie = await movieModel.find().skip(skip).limit(limit);
    res.send(movie)
  } catch (err) {
    res.send(err);
  }
});

module.exports = { movieRoute };
