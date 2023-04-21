const mongoose=require("mongoose");


const HerosSchema=mongoose.Schema({
    name:{type: String, require:true},
    age:{type: Number, require:true},
    city:{type: String, require:true}
});

const HeroModel=mongoose.model("hero",HerosSchema);

module.exports={HeroModel}