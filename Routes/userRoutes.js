const { createUser } = require("../controlar/userCon");

const userRoutes = require("express").Router();

userRoutes.get("/", createUser);

module.exports = userRoutes;
