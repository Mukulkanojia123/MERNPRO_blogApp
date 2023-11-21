
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const MY_KEY = 'myjwtKey12345678';

const authMiddleWare = async (req, res, next)=>{
    const unauthorizedResponse = {
        sussess : false,
        message : "Unauthorized"
    }
    /** to varify token is presend in req header
     * validate to token signature
     * validate to token expiary
     * Match the user token with db token
     */

    try{
        // console.log("1")
        // console.log(req.headers)
        
        const auth = req.headers.authorization;

        if(!auth){
            return res.status(401).json({
                sussess : false,
                message : "Unauthorized0"
            })
        }
        // console.log("2")
        const token = auth.split(' ')[1];
        if(!token){
            return res.status(401).json({
                sussess : false,
                message : "Unauthorized1"
            })
        }
        // console.log("3")
            jwt.verify(token , MY_KEY)

            const tokenData = jwt.decode(token);
            const tokenExpiary = tokenData.exp;
            const now = Date.now();
            // console.log("4")
            if(tokenExpiary <= now){
                return res.status(401).json({
                    sussess : false,
                    message : "Unauthorized2"
                })
            }
            // console.log("5")
            const user = await User.findById(tokenData._id);
            if(!user){
                return res.status(401).json({
                    sussess : false,
                    message : "Unauthorized3"
                })
            }
            // if(token !== user.token){
            //     return res.status(401).json(unauthorizedResponse)
            // }
                // console.log("6")
            req.user = user;
            next();
    }catch(err){
        console.log(err);      
         res.status(401).json({
            sussess : false,
            message : "Unauthorized4"
        })
    }
}

module.exports = authMiddleWare;