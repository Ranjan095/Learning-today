/** @format */

const express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./routes/userRoute");
const { postRoute } = require("./routes/postRoute");
const { auth } = require("./middlewere/auth");

const app = express();
app.use(express.json())



app.use("/users",userRoute)
app.use(auth)
app.use("/posts",postRoute)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err.message)
    console.log('can not connect to the DB')

  }
  console.log("port is running at 8080");
});
