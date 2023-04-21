/** @format */

const mongoose = require("mongoose");
// const mongoose = require("mongoose");


let main= async ()=>{
try {
    let connection = await mongoose.connect( "mongodb://127.0.0.1:27017")
    console.log("connected to DB")
} catch (err) {
    console.log("Can't connect to DB")
    console.log(err)
}
}

main()