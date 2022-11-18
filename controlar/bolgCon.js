const Blog = require("../modules/blogModule");
///
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
  } catch (error) {}
};
