/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./routes/userRoute");
const { notesRout } = require("./routes/notesRoute");
require("dotenv").config();

let app = express();
app.use(express.json())
app.use("/user", userRoute);
app.use("/notes",notesRout)

app.get("/", (req, res) => {
  res.status(200).send({ msg: "this is home page" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`port is running at ${process.env.PORT}`);
});
