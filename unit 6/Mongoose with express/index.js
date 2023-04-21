/** @format */

const express = require("express");
const {mongooseDB,UserModel}=require("./db.js")
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Home Page");
});

//Create
app.post("/adduser", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Read
app.get("/users", async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
});

app.listen(8080, async () => {
  try {
    await mongooseDB
    console.log("connected to the DB!!");
  } catch (err) {
    console.log(err);
  }

  console.log("port is running at 8080");
});


