/** @format */

const express = require("express");
const { UserModel } = require("../model/user.model");
const { getUser, registerUser } = require("../model/countroler/userControler");

const userRoute = express.Router();

userRoute.get("/",getUser)

userRoute.post("/register",registerUser)

module.exports = { userRoute };
