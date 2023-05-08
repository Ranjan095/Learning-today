const mongoose = require("mongoose");

const movieSchema=mongoose.Schema({
    movie_name:String,
    genre:String,
    director:String,
    rating:Number,
    year_of_release:Number
});

const movieModel=mongoose.model("movie",movieSchema);

module.exports={movieModel}