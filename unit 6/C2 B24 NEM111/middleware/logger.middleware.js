
// write the logic for logger middleware and export it.
const fs = require("fs")
const logger=(req,res,next) =>{
  const {method,url,header:{"user-agent":userAgent}} = req
  let abc = `Method:${method}, Route:${url}, user-agent:${userAgent}\n`
  fs.appendFileSync("./logs.txt",abc)
  next()
}

module.exports = logger