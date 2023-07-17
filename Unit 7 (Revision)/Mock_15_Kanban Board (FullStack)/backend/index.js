/** @format */

let express = require("express");

const { connection } = require("./db");
const { userRoute } = require("./Routes/userRoute");
const { auth } = require("./Middleware/auth");
const { bordRoute } = require("./Routes/bordRoute");

require("dotenv").config();
let app = express();
app.use(express.json());

app.use("/users", userRoute);
app.use("/bords", bordRoute);
app.get("/", auth, (req, res) => {
  res.send("hello home page ");
});
app.listen(`${process.env.PORT}`, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running at ${process.env.PORT}`);
});
