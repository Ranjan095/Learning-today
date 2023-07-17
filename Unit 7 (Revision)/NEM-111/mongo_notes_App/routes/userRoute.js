/** @format */

let express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../model/userModel");

let userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send({ msg: "user page" });
});

userRoute.post("/create", async (req, res) => {
  let { name, age, gender, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        let newUser = new UserModel({
          name,
          age,
          gender,
          password: hash,
          email,
        });
        await newUser.save();
        res.status(200).send({ msg: "New user has been created" });
      } else {
        res.status(200).send(err);
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

userRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { authorId: user._id, author: user.name },
            "ranjan"
          );
          res.status(200).send({ msg: "you have loggedin", token });
        } else {
          res.status(200).send({ msg: "please enter your correrct password" });
        }
      });
    } else {
      res.status(200).send({ msg: "please create your account first" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { userRoute };
