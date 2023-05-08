const mongoose=require("mongoose");

const movieSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String
});

const MovieModel=mongoose.model("movie",movieSchema);

module.exports={MovieModel}