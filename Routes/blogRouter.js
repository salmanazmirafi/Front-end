const {
  getAllblog,
  createBlog,
  updateblog,
  deleteBlog,
  singleBlog,
  getByUserId,
} = require("../controlar/bolgCon");

const blogRouter = require("express").Router();

blogRouter.get("/", getAllblog);
blogRouter.post("/crate", createBlog);
blogRouter.put("/:blogId", updateblog);
blogRouter.delete("/:blogId", deleteBlog);
blogRouter.get("/:id", singleBlog);
blogRouter.get("/user/:id", getByUserId);

module.exports = blogRouter;
