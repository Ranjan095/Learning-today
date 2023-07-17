/** @format */

var jwt = require("jsonwebtoken");
let auth = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      var decoded = jwt.verify(token.split(" ")[1], "ranjan");
      if (decoded) {
        req.body.authorId = decoded.authorId;
        req.body.author = decoded.author;
        next();
      } else {
        res.status(200).send({ msg: "please login first" });
      }
    } catch (error) {
      res.status(200).send(error);
    }
  } else {
    res.status(200).send({ msg: "please login first" });
  }
};

module.exports = { auth };
