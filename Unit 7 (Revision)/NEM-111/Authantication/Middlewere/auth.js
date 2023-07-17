/** @format */

var jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    try {
      let decode = jwt.verify(token?.split(" ")[1], "masai");
      console.log(decode);
      if (decode) {
        (req.body.author = decode.author),
          (req.body.authorId = decode.authorId);
        next();
      } else {
        res.status(400).send({ msg: "please Login First" });
      }
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else {
    res.status(400).send({ msg: "Please Login First" });
  }
};

module.exports = { auth };
