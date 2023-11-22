const Blog = require("../models/blog");
const path = require("path");

const getList = async (req, res) => {
	const blogs = await Blog.find({}).populate("createdBy");
	res.json({
		success: true,
		results: blogs,
	});
};

const createBlog = async (req, res) => {
	console.log(req.body, req.file);

	const filePath = "/" + req.file.filename;
	const blogData = {
		title: req.body.title,
		description: req.body.description,
		image: filePath,
		createdBy: req.user._id,
	};
	const blog = new Blog(blogData);
	await blog.save();
	res.json({
		success: true,
		message: "blog created successfully",
	});
};
const editBlog = (req, res) => {
	res.json({
		success: true,
	});
};
const remove = (req, res) => {
	res.json({
		success: true,
	});
};

const downloadFile = async (req, res) => {
	const filename = req.params.filename;
	const filePath = path.join(__dirname, "../public", filename);

	res.download(filePath, (err) => {
		if (err) {
			console.error(`Error downloading file: ${err.message}`);
			res.status(500).json({
				success: false,
				message: "Error downloading file",
			});
		} else {
			console.log(`File downloaded: ${filePath}`);
		}
	});
};

module.exports = {
	getList,
	createBlog,
	editBlog,
	remove,
	downloadFile,
};
