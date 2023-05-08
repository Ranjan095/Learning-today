
const {Schema,model}=require("mongoose");


const userSchema=Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:[String]},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

const UserModel=model("user",userSchema);

module.exports={UserModel}