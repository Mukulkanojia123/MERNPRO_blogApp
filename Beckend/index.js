const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const portNo = 8000;

mongoose
.connect("mongodb://127.0.0.1/blogapp")
.then(()=>{ 
    console.log("CONECTION ESTABLISHED SUCCESSFULLY")
})
.catch((err)=>{
    console.log("ERROR WHILE CONNECTION DATABASE",err);
})


// const filesDirectory = path.join(__dirname, 'files');
// app.use(express.static(filesDirectory));
// middle ware 
app.use(express.static("files"));  // we use this as in frontend side we send image path when they request for image
// thorugh path express thought it is the route not file so we use middle ware to tell that use static method and that 
// file name is in in the imgage path in which all images are store
app.use(express.json());  // catch information from api other wise it give undefined
app.use(cors());          // for avoid cors error because our server is on 8000 port and react app is 3000 

// import authMiddleWare
const authMiddleWare  = require('./middleWare/authMiddleWare')

// taking routes from routes folder
const approute = require('./routes/auth')
const blogroutes = require('./routes/blog')
// giving path
app.use('/api/v1/auth/',approute)
app.use('/api/v1/blog/',blogroutes)
// app.use('/api/v1/blog/',authMiddleWare,blogroutes)

app.listen(portNo,()=>console.log(`port is listening on ${portNo}`));