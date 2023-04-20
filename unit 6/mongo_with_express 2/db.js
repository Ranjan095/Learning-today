const mongoose=require("mongoose")

const connection = mongoose.connect("mongodb://127.0.0.1:27017/mongoose_Day2")

const userSchema=mongoose.Schema({
    name:{type: String, require:true},
    age:{type: Number, require:true},
    city:{type: String, require:true}
});

const UserModel=mongoose.model("user",userSchema);

module.exports={connection,UserModel}