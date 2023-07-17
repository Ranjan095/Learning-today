/** @format */

let express = require("express");
let mongoose = require("mongoose");
const { UserModel, connection } = require("./db");

let app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("home Page");
});

//for add new user
app.post("/adduser", async (req, res) => {
  let user = req.body;
  try {
    let newUser = new UserModel(req.body);
    await newUser.save();
    res.send({
      msg: "new user has been created",
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// read all users
app.get("/users", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(4040).send(error);
  }
});

// filter with gender
app.get("/gender", async (req, res) => {
  let gender = req.query;
  try {
    let filterUser=await UserModel.find(gender);
    res.status(200).send(filterUser)
  } catch (error) {
    res.status(400).send(error);
  }
});

// for update user
app.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  let user = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, user);
    res.send({
      msg: "user has been updated",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

//for delete user
app.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;

  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      msg: "user has been deleted",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(8090, async () => {
  try {
    await connection
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
  console.log("port is running at 8090");
});
