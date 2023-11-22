const express = require("express");
// taling routes from expresss
const router = express.Router();

// import controllers
const blogController = require("../controllers/blog");
// import fileupload middleware
const fileuploadMiddleWare = require("../middleWare/fileUploadMiddleWare");

router
	.get("/", blogController.getList)
	.post("/", fileuploadMiddleWare.single("file"), blogController.createBlog)
	.patch("/", blogController.editBlog)
	.delete("/", blogController.remove)
	.get("/download/:filename", blogController.downloadFile);

module.exports = router;
