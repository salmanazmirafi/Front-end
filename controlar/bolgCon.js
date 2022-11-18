const Blog = require("../modules/blogModule");
const User = require("../modules/userModules");
const mongoose = require("mongoose");
// Get All Blog
exports.getAllblog = async (req, res) => {
  try {
    const findBlog = await Blog.find();
    if (!findBlog) {
      res.status(400).json({
        message: "Blog Not Found",
      });
    }
    res.status(200).json({
      message: "Find Result",
      findBlog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Wrong",
      error,
    });
  }
};
// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    const existingUser = await User.findById(user);
    if (!existingUser) {
      res.status(400).json({
        message: "Unable TO FInd User By This ID",
      });
    }
    const blog = new Blog({
      title,
      description,
      image,
      user,
    });
    //
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await blog.save({ session });
      existingUser.blogs.push(blog);
      await existingUser.save({ session });
      await session.commitTransaction();
    } catch (error) {
      return res.status(500).json({ message: err });
    }
    //
    res.status(201).json({
      message: "Blog Crate Success",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Wrong",
      error,
    });
  }
};
// Update Blog
exports.updateblog = async (req, res) => {
  try {
    const userId = req.params.blogId;
    const blogId = await Blog.findById(userId);
    if (!blogId) {
      res.status(400).json({
        message: "Blog Not Found",
      });
    }
    const updatepost = await Blog.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Blog Update Successful",
      updatepost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Wrong",
      error,
    });
  }
};
// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const bid = await Blog.findById(blogId);
    if (!bid) {
      res.status(400).json({
        message: "Blog Not Find",
      });
    }
    await Blog.findByIdAndDelete(blogId).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();

    res.status(200).json({
      message: "Blog Delete Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Wrong",
      error,
    });
  }
};
// Get Single Blog
exports.singleBlog = async (req, res) => {
  try {
    const findId = req.params.id;
    const Id = await Blog.findById(findId);
    if (!Id) {
      res.status(400).json({
        message: "Blog Not Found",
      });
    }
    res.status(200).json({
      message: "Find Result",
      Id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something Wrong",
      error,
    });
  }
};
// Get User Id
exports.getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (err) {
    return console.log(err);
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ user: userBlogs });
};
