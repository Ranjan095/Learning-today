
const express=require("express")
const {UserModel}=require("../models/user.models")
const userRouter=express.Router()

userRouter.post("/add", async (req, res) => {
    try {
      const user = await new UserModel(req.body);
      user.save();
  
      res.send(user);
    } catch (err) {
      console.log(err);
    }
  });

//read
  userRouter.get("/", async (req, res) => {
    try {
      const { sort } = req.query;
      let users;
      if (sort == "desc") {
        users = await UserModel.find().sort({ age: -1 });
      } else {
        users = await UserModel.find();
      }
  
      res.send(users);
      // console.log(query);
    } catch (err) {
      console.log(err);
    }
  });
  
  userRouter.patch("/update/:id", async (req, res) => {
    try {
      let { id } = req.params;
      await UserModel.findByIdAndUpdate({ _id: id }, req.body);
      res.send("Data updated");
    } catch (err) {
      console.log(err);
    }
  });
  
  userRouter.delete("/delete/:id", async (req, res) => {
    try {
      let { id } = req.params;
      const deletedUser = await UserModel.findByIdAndDelete({ _id: id });
      res.send(`user ${deletedUser} is deleted`);
    } catch (err) {
      console.log(err);
    }
  });

  module.exports={userRouter}