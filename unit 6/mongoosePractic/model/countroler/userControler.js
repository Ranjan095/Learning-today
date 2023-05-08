const { UserModel } = require("../user.model")
const bcrypt = require('bcrypt');

//  To get all Users
const getUser=async(req,res)=>{
try {
    const user=await UserModel.find();
    res.status(200).send(user)
} catch (err) {
    res.status(400).send({"err":err.messaage})
}
}

// to Register User
const registerUser=async(req,res)=>{
    const {name,email,age,city,password}=req.body;
try {
    bcrypt.hash(password, 5,async(err, hash) => {
       if(hash){
        const user=new UserModel({name,email,age,city,password:hash});
        await user.save()
        res.status(200).send({"msg":"new user has been register"})
       }
    });
  
} catch (err) {
    res.status(400).send({"err":err.messaage})
}
}

module.exports={getUser,registerUser}