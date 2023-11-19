
const express = require('express');
// taling routes from expresss
const router = express.Router();

// import controllers 
const blogController = require('../controllers/blog')
// import fileupload middleware
const fileuploadMiddleWare = require('../middleWare/fileUploadMiddleWare')

router
.get('/',blogController.getList)
.post('/',fileuploadMiddleWare.single('image'),blogController.createBlog)  // use middle ware to take image and store in files folder
.patch('/',blogController.editBlog)
.delete('/',blogController.remove)




module.exports = router;