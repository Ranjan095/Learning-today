/** @format */

let express = require("express");
const { UserModel } = require("../Model/UserModel");
var jwt = require("jsonwebtoken");
let userRoute = express.Router();
const bcrypt = require("bcrypt");

// For creating new user
userRoute.post("/create", async (req, res) => {
  let { name, age, gender, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      let newUser = new UserModel({ name, age, gender, email, password: hash });
      await newUser.save();
      res.status(200).send({
        msg: "New user has been registerd",
      });
    });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

// For login user;
userRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          let token = await jwt.sign({ author:user?.name,authorId:user?._id }, "masai");
          console.log({ token: token });
          res.status(200).send({ msg: "user has been logedin", token });
        } else {
          res.status(400).send({
            msg: "Please login first",
          });
        }
      });
    } else {
      res.status(200).send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    console.log({
      err: error,
    });
    res.status(400).send({
      msg: error,
    });
  }
});

module.exports = { userRoute };
