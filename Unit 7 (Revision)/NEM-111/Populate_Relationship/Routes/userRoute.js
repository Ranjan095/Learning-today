/** @format */

let express = require("express");
const { UserModel } = require("../Model/userModel");
const bcrypt = require("bcrypt");
let userRoute = express.Router();
var jwt = require("jsonwebtoken");
// for get all users
userRoute.get("/", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({
      msg: error,
    });
  }
});

// For Create users
userRoute.post("/create", async (req, res) => {
  let { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        let user = new UserModel({
          name,
          email,
          password: hash,
          createdAt: new Date(),
        });
        await user.save();
        res.status(200).send({ msg: "New user has been created" });
      } else {
        res.status(400).send(err);
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// for Login users
userRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  if (user) {
    try {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          var token = jwt.sign({ author: user.name }, "masai");
          res.status(200).send({
            msg: "Login Successfull",
            token: token,
          });
        } else {
          res.status(400).send({
            msg: "Sorry.. Wrong password",
          });
        }
      });
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(400).send({
      msg: "Please Register your account",
    });
  }
});

module.exports = { userRoute };
