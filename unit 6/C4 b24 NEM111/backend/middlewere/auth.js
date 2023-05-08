var jwt = require("jsonwebtoken");
const auth=(req,res,next)=>{
    const token = req.headers.authorization;
    if (token) {
      try {
        const decoded = jwt.verify(token.split(" ")[1], "ranjan");
        if (decoded) {
          req.body.authorId = decoded.authorId;
           req.body.author = decoded.author;
         next()
        } else {
          res.status(200).send({ msg: err.message });
        }
      } catch (err) {
        res.status(200).send({ msg: err.message });
      }
    } else {
      res.status(200).send({ msg: "login first" });
    }
}
module.exports={auth}