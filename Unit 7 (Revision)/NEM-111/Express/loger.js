/** @format */

let fs = require("fs");

let loger = (req, res, next) => {
  fs.appendFileSync(
    "./text.txt",
    `Route: ${req.url}, method: ${req.method}, Time: ${new Date()} \n`
  );
  next();
};

module.exports = { loger };
 