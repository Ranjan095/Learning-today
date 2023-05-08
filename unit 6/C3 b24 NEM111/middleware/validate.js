/** @format */

const validate = (req, res, next) => {
  const { movie_name, genre, director, rating, year_of_release } = req.body;

  try {
    if (
      typeof movie_name == "string" &&
      typeof genre == "string" &&
      typeof director == "string" &&
      typeof rating == "number" &&
      typeof year_of_release == "number"
    ) {
      
      next();
    } else {
      res.status(400).send("no data type is not matching");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { validate };
