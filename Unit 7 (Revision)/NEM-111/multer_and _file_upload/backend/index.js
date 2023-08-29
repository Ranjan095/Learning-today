/** @format */

let express = require("express");
const multer = require("multer");
require("dotenv").config();
const { connection } = require("./db");
const { productRoute } = require("./routes/productRoute");
var cors = require("cors");
const { upload } = require("./multer/avatar");

let app = express();

app.use(cors());

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/product", productRoute);



app.post("/upload", upload.single("avatar"), async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);
    res.send("the page");
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log("somthing went wrong DB has been not connected");
  }
  console.log(`port is running at ${process.env.PORT}`);
});
