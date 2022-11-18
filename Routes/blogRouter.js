const { getAllblog, createBlog } = require("../controlar/bolgCon");

const blogRouter = require("express").Router();

blogRouter.get("/", getAllblog);
blogRouter.post("/crate", createBlog);

module.exports = blogRouter;
