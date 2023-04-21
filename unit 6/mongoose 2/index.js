/** @format */

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/learningMongoose"
    );
    console.log("connected to DB");

    // if want to insert one Document
    const user = new UserModel({ name: "Buttu", age: 28, city: "Bangalore" });
    await user.save();

    // * if I want to insert many document *//
    // await UserModel.insertMany([{name:"Raju",age:23,city:"Darbhanga"},{name:"Sandhya",age:24,city:"Nagpur"}])
    console.log("Documents is inserted");
    connection.disconnect();
    console.log("disconnected to DB");
  } catch (error) {
    console.log("can't connected to the DB");
  }
};

connectDb();

// ***** */ 1.Schema ==> 2. Model ==>  3. Document*****//

const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    city: String,
  },
  {
    versionKey: false,
  }
);

//*** if type and require in needed ***/

// const userSchema = mongoose.Schema(
//   {
//     name: { type: String, require: true },
//     age: { type: Number, require: true },
//     city: { type: String, require: true },
//   },
//   {
//     versionKey: false,
//   }
// );

const UserModel = mongoose.model("users", userSchema); //"users mean to create a collection in side the DB , & DB is end point of URL (mongoose.connection)"
