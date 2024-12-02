const mongoose = require('mongoose');

const usc = new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    email:String,
    password:{
        type:String,
        select:false
    }
});
module.exports = mongoose.model("User", usc);