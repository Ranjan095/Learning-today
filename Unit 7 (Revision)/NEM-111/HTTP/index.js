/** @format */

let http = require("http");
let fs = require("fs");
let PORT = 4500;

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to Home page");
  } else if (req.url == "/about") {
    res.end("Welcome to About page");
  } else if (req.url == "/contact") {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Welcome to Contact Page</h1>");
  } else if (req.url == "/data") {
    try {
      let data = fs.readFileSync("data.json", "utf-8");
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else if (req.url == "/write") {
    try {
      fs.writeFileSync("./text.txt", "\n Hellow world");
      res.end("data has been written in file text.txt");
    } catch (error) {
      res.end(error);
    }
  }
});

server.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
