// Blog schema 

// import mongoose
const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
    title :{
        type : String,
        require : true,
        min : 4
    },
    description : {
        type : String ,
        require : true,
        min : 20
    },
    image : {
        type : String,    // type string because we dont store image in data base we store path of the image
        require : false,
        default : ""
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        require : true
    },
    upVotes : {
        type : Number,
        require : false,
        default : 0
    },
    upVotes : {
        type : Number,
        require : false,
        default : 0
    }

},{timestamps : true})

// for export schema their is methos mongoose.model// this mongoose.model create in data base with is name in string we pass
 
module.exports = mongoose.model('blogs',blogschema)


