/** @format */

const express = require("express");
const { connection } = require("./db.js");
const { userRouter } = require("./router/users.route.js");
const { heroRouter } = require("./router/heros.route.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/users",userRouter);
app.use("/heros",heroRouter)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log("port is runing at 8080");
});
