let express = require("express");
const { student } = require("./Routes/Student.routes");
const { teacher } = require("./Routes/Teacher.route");
const { timeLoger } = require("./Time.loger");
const { loger } = require("./loger");
let cors=require("cors")
let PORT = 8080;

let app = express();
app.use(cors())
//middleweare
app.use(timeLoger)
app.use(loger)
app.use("/students", student);
app.use("/teachers",teacher)


app.get("/", (req, res) => {
  res.send("Home page");
  console.log("HOME PAGE");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
