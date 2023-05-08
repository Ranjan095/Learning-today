/** @format */

const express = require("express");
const { UserModel } = require("../models/user.modle");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// userRoute.get("/", (req, res) => {
//   res.send({ msg: "Home Page" });
// });

userRoute.post("/register", async (req, res) => {
  const { name, email, gender, password, city, is_married } = req.body;
  const check = await UserModel.findOne({ email });
  if (check) {
    res.status(200).send({ msg: "User already exist, please login" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (hash) {
          const user = new UserModel({
            name,
            email,
            gender,
            password: hash,
            city,
            is_married,
          });
          await user.save();
          res.status(200).send({ msg: "new user has been created" });
        }
      });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { authorId: user._id, author: user.name },
            "ranjan"
          );
          res.status(200).send({
            msg: "login Successful",
            token: token,
          });
        } else {
          res.status(200).send({ msg: "wrong password" });
        }
      });
    } else {
      res.status(200).send({ msg: "Please signup first" });
    }
  } catch (err) {
    res.status(400).send({ "err": err.message });
  }
});

module.exports = { userRoute };
