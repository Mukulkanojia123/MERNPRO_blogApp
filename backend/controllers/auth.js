
// import bcrypt for hashing the password
 const bcrypt = require('bcrypt');

// user schema ehich is in models folder
const User = require('../models/User')

// import JSONwebToken from jsonwebtoken to create and send jwt in responce to login
const jwt = require('jsonwebtoken');
// the key to mix with jwt 
const MY_KEY = 'myjwtKey12345678';

const login = async(req,res)=>{
    // console.log(req.body)
    const user = await User.findOne({Username : req.body.username});
    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }
        // console.log(user);
    const isValidUser = await bcrypt.compare(req.body.password , user.password);
    if(!isValidUser){
        return  res.status(400).json({
            message:"user not found"
        })
    }
    // console.log(isValidUser);
    // for current time when jwt is created
    const now = Date.now()

    // this is the payload or data which go in our jwt  
    const payload = {
            iat : now,
            exp : now + 3600*1000,
            _id : user._id,
            email : user.email
    }
    const token = jwt.sign(payload , MY_KEY)
    res.json({
        success : true,
        message:"User login successfull",
        token : token
    })
}


const register =async (req,res)=>{
    // console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const user = new User({
        Username : req.body.username ,
        email : req.body.email,
        password : hashPassword
    })
    

    await user.save();
    res.json({
        success : true,
        message : "User register successfull"
    })
}


const logout = (req , res)=>{
    res.json({
        success : true,
        message : "logout successfull"
    })
}

module.exports = {
    login,
    register,
    logout,
}