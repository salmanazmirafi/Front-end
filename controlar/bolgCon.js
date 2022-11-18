const Blog = require("../modules/blogModule");
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
    const blog = await Blog.create({
      title,
      description,
      image,
      user,
    });
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
// Delete Blog
// Get Single Blog
// Get User Id
