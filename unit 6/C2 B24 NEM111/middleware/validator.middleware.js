
// write the logic for validation middleware.
const validator = (req,res,next)=>{
   const {pass,role}  = req.query
   if(pass == 7877 && (role=="admin" || role=="instuctor")){
      next()
   }else{
    res.status(400).send("You are not authorised to do this operation")
   }
}

module.exports = validator