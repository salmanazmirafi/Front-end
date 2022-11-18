const {
  getAllblog,
  createBlog,
  updateblog,
  deleteBlog,
  singleBlog,
} = require("../controlar/bolgCon");
const { getAlluser } = require("../controlar/userCon");

const blogRouter = require("express").Router();

blogRouter.get("/", getAllblog);
blogRouter.post("/crate", createBlog);
blogRouter.put("/:blogId", updateblog);
blogRouter.delete("/:blogId", deleteBlog);
blogRouter.get("/:id", singleBlog);
blogRouter.get("/user/:id", getAlluser);

module.exports = blogRouter;
