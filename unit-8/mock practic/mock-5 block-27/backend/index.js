/** @format */

let express = require("express");
const { empRoute } = require("./Routes/employeeRoute");
const { connection } = require("./db");
const { userRoute } = require("./Routes/userRoute");

require("dotenv").config();
let app = express();
app.use(express.json());
app.use("/employee", empRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  console.log("Home page");
  res.send({ msg: "Welcome to Home page" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(
      "Somthing went wrong (DB has been not been connected), please check DB URL"
    );
  }
  console.log(`poer is running at ${process.env.PORT}`);
});
