const mongoose=require("mongoose");

const mongooseDB= mongoose.connect("mongodb://127.0.0.1:27017/express_with_mongoose");


const userScmea = mongoose.Schema({
    name: String,
    age: Number,
    is_married: Boolean,
  });
  
  const UserModel = mongoose.model("user", userScmea);


module.exports={mongooseDB,UserModel}