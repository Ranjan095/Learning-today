/** @format */

let mongoose = require("mongoose");

async function main() {
  try {
    let connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/ranjan_sandy"
    );
    console.log("connected to db");

    let user = new Usermodel({
      name: "Raju",
      age: 24,
      city: "Madhubani",
    });
    await user.save();

    // await Usermodel.insertMany([
    //   { name: "Ranjan", age: 26, city: "Madhubani" },
    //   { name: "Sandhya", age: 25, city: "Nagpur" },
    // ]);
    console.log("document is incerted");
  } catch (error) {
    console.log("Not connected to DB");
    console.log(error);
  }
}
main();

let userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    city: { type: String, require: true },
  },
  { versionKey: false }
);

let Usermodel = mongoose.model("user", userSchema);
