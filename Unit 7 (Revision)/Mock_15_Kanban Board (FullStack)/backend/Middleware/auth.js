/** @format */
var jwt = require("jsonwebtoken");
let auth = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      var decoded = await jwt.verify(token?.split(" ")[1], "masai");
      console.log(decoded);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(400).send({
      msg: "Please login first",
    });
  }
};
module.exports = { auth };
