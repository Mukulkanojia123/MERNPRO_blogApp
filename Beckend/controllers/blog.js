
const Blog = require('../models/blog')

const getList = async(req,res)=>{
    const blogs = await Blog.find({}).populate('createdBy');   // populated us with parameter in which we eant to delatils that ore store in other store that we define when we make schema
    // console.log(blogs);
    res.json({
        success: true,
        results: blogs
    });
}
const createBlog = async(req,res)=>{
    console.log(req.body,req.file)
    const filePath = '/' + req.file.filename;  // file path that we store in dp
    const blogData = {
        title: req.body.title,
        description: req.body.description,
        image: filePath,
        createdBy: req.user._id
    };
    const blog = new Blog(blogData);
    await blog.save();
    res.json({
        succes : true,
        message : 'blog created successfully'
    })
}
const editBlog = (req,res)=>{
    res.json({
        succes : true
    })
}
const remove = (req , res)=>{
    res.json({
        succes : true
    })
}

module.exports = {
    getList,
    createBlog,
    editBlog,
    remove
}