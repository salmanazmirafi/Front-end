const { getAllblog } = require("../controlar/bolgCon");

const blogRouter = require("express").Router();

blogRouter.get("/", getAllblog);

module.exports = blogRouter;
