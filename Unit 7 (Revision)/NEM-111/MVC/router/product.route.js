let express=require("express");

let productRoute=express.Router();

productRoute.get("/",(req,res)=>{
    res.send({
        "msg":"this is product route"
    })
});

module.exports={productRoute}