/** @format */

let mongoose = require("mongoose");

let main = async () => {
  try {
    let connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/sandy_2"
    );
    console.log("Db has been connected");

    // // for insert many document
    // await UserModel.insertMany([
    //   { name: "Sandhya", age: 24, city: "Nagpur" },
    //   { name: "Ranjan", age: 26, city: "Chennai" },
    //   { name: "Suman", age: 7, city: "Madhubani" },
    // ]);

    // for insert One document
    let user = new UserModel({
      name: "Bittu",
      age:29,
      city:"Bangalore"
    });
await user.save()
    console.log("document has been inserted");
  } catch (error) {
    console.log("DB has not been connected");
    console.log(error);
  }
};
main();

let userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    age: { type: Number, require },
    city: { type: String, require },
  },
  { versionKey: false }
);

let UserModel = mongoose.model("user", userSchema);
