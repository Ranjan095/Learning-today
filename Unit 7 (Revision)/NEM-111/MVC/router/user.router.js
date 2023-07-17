/** @format */

let express = require("express");
const { UserModel } = require("../model/user.model");

let userRoute = express.Router();

// To read all user Route
userRoute.get("/", async (req, res) => {
  let query = req.query;

  try {
    let users = await UserModel.find(query);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

//******** Check filter*/
userRoute.get("/", async (req, res) => {
  let {name, age, city} = req.query;
  let query = {};

  if (name) {
    query.name = name;
  }

  let users = await UserModel.find({$and: [{name: ""}, {}]});

  try {
    let users = await UserModel.find(query);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// To create new users Route
userRoute.post("/create", async (req, res) => {
  try {
    let newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).send({
      msg: "New user has been created",
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// update user Route
userRoute.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      msg: "user has been updated",
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// Delete user Route
userRoute.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      msg: "user has been deleted",
    });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// To find by ID
userRoute.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let user = await UserModel.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.status(200).send(error);
    console.log(error);
  }
});

module.exports = { userRoute };
