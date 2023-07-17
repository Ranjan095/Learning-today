/** @format */

let express = require("express");
const { connection, UserModel } = require("./db");

let app = express();
app.use(express.json());

// for home page
app.get("/", (req, res) => {
  res.send("home page");
});

// add new user
app.post("/addUser", async (req, res) => {
  try {
    let user = req.body;
    let newUser = new UserModel(user);
    await newUser.save();
    res.status(200).send({
      msg: "new user has been created",
    });
  } catch (error) {
    console.log("somthing went wrong");
    res.status(400).send(error);
  }
});

// for read all user
app.get("/users", async (req, res) => {
  let query = req.query;
  let users = await UserModel.find(query);
  console.log(query);
  res.send(users);
  try {
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// for update
app.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "user has been updated" });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// for run the surver in particular port and connect server to db
app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log("somthing went wrong");
    console.log("not connected to db");
  }
  console.log("port is running at 8080");
});
