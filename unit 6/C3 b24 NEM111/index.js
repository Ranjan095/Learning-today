/** @format */

const express = require("express");
const {connection} = require("./db");
const {movieRoute}=require("./router/movie.route");
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

app.use("/movie",movieRoute)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log("Can't connect to DB");
  }

  console.log("port is running at 8080");
});
