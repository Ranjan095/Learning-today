/** @format */

const express = require("express");
const { connection, UserModel } = require("./db.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/addUser", async (req, res) => {
  try {
    const user = await new UserModel(req.body);
    user.save();

    res.send(user);
  } catch (err) {
    console.log(err);
  }
});
app.get("/users", async (req, res) => {
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

app.patch("/update/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data updated");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete({ _id: id });
    res.send(`user ${deletedUser} is deleted`);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log("port is runing at 8080");
});
