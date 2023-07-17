/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRoute } = require("./router/user.router");
const { productRoute } = require("./router/product.route");

let app = express();
app.use(express.json())
// Routes
app.use("/user", userRoute);
app.use("/product", productRoute);

// home page route
app.get("/", (req, res) => {
  res.send({
    msg: "this is Home page",
  });
});


app.listen(8080, async () => {
  try {
    await connection;
    console.log(`DB has been connected`);
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running at port 8080`);
});
