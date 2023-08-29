/** @format */

let express = require("express");
const { UserModel } = require("../models/userModel");

let userRoute = express.Router();

// API for get All user
userRoute.get("/", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// API for Create new user
userRoute.post("/create", async (req, res) => {
  let doc = req.body;
  try {
    let newUser = new UserModel(doc);
    await newUser.save();
    res.status(200).send({
      msg: "New User has been created",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// API for Login user
userRoute.post("/login", async (req, res) => {
  let doc = req.body;
  try {
    let user = await UserModel.findOne(doc);
    if (user) {
      res.status(200).send({ msg: "user has been login successfully" });
    } else {
      res.status(400).send({ msg: "Wrong Crendiantials" });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { userRoute };
