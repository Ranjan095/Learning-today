const {connect}=require ("mongoose");

const connetion=connect(`mongodb://127.0.0.1:27017/practicDB`);

module.exports={connetion}