// user schema 

// import mongoose
const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    Username : {
        type : String,
        required : true,
        min : 5,
        max : 25,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        min : 8
    },
    jwt : {
        type : String,
        default : ""
    }
},{timestamps : true})

// for export schema their is methos mongoose.model// this mongoose.model create in data base with is name in string we pass
 
module.exports = mongoose.model('user',Userschema)


