/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./Route/UserRoute");
var jwt = require("jsonwebtoken");
const { auth } = require("./Middlewere/auth");
const { noteRoute } = require("./Route/NoteRoute");
let app = express();
app.use(express.json());
app.use("/user", userRoute);
app.use("/note", noteRoute);

app.get("/", (req, res) => {
  res.send("home page");
  console.log("home page");
});

// Private Route without middlewere
app.get("/movie", async (req, res) => {
  let token = req.headers.authorization;
  try {
    jwt.verify(token?.split(" ")[1], "masai", (err, decoded) => {
      if (decoded) {
        res.status(200).send({ msg: "Welcome to movie page" });
      } else {
        res.status(400).send({ err: err.message });
        console.log({ err: err });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// Private Route using middlewere
// app.use(auth);
app.get("/serial", auth, (req, res) => {
  res.status(200).send({ msg: "Welcome to Serial Page" });
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
    console.log("DB has not been connected");
  }
  console.log("port is running at 8080");
});
