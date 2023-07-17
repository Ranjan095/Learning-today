const { Router } = require('express');
const { MovieModel } = require('../db');

const movieRouter = Router();

// POST request
movieRouter.post('/add', async (req, res) => {
  const payload = req.body;
  try {
    const movie = new MovieModel(payload);
    await movie.save();
    // await MovieModel.insertMany(payload);
    res.status(200).send({ msg: 'New movie has been added' });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// GET request with queries
movieRouter.get('/', async (req, res) => {
  try {
    let { title, genre, min_rating, max_rating, q, sortBy, order } = req.query;
    let query = {};
    let sortQuery = {};

    if (title && q) {
      return res.status(400).send({
        msg: 'Invalid query provided. Please provide either title or q in the query.'
      });
    }

    if (title) query.title = { $regex: title, $options: 'i' };
    if (q) query.title = { $regex: q, $options: 'i' };
    if (genre) query.genre = genre;

    if (sortBy && order) {
      if (
        (sortBy !== 'rating' && sortBy !== 'year') ||
        (order !== 'asc' && order !== 'desc')
      ) {
        return res.status(400).send({
          msg: 'Invalid query provided. Please provide sortBy=rating OR year&order=asc OR desc in the query.'
        });
      } else sortQuery[sortBy] = order === 'asc' ? 1 : -1;
    }

    if (min_rating && max_rating) {
      query.rating = { $lte: +max_rating, $gte: +min_rating };
    } else {
      if (min_rating) query.rating = { $gte: +min_rating };
      if (max_rating) query.rating = { $lte: +max_rating };
    }

    let movies = await MovieModel.find({ $and: [query] }).sort(sortQuery);
    return res.status(200).send(movies);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// GET request with params
movieRouter.get('/movie/:movieID', async (req, res) => {
  try {
    let { movieID } = req.params;
    let movie = await MovieModel.findById(movieID);
    return res.status(200).send(movie);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

movieRouter.get('/page/:pageNo?', async (req, res) => {
  try {
    let pageNo = +req.params.pageNo || 1;
    let limit = 2;
    let movies = await MovieModel.find()
      .skip(pageNo * limit - limit)
      .limit(limit);

    res.status(200).send(movies);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// PATCH request
movieRouter.patch('/update/:movieID', async (req, res) => {
  const { movieID } = req.params;
  const payload = req.body;
  try {
    await MovieModel.findByIdAndUpdate(movieID, payload);
    res.status(200).send({ msg: 'The movie details have been updated' });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// DELETE request
movieRouter.delete('/delete/:movieID', async (req, res) => {
  const { movieID } = req.params;
  try {
    await MovieModel.findByIdAndDelete(movieID);
    res.status(200).send({ msg: 'Movie has been deleted' });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { movieRouter };