const mongoose = require('mongoose'); 

const Schema = mongoose.Schema;

const user = new Schema({
    firtname: String,
    lastname: String,
    username: String,
    email:String,
    password:String,
    phone:Number,
    
})
module.exports= mongoose.model("Register",user);