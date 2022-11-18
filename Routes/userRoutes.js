const { getAlluser, createUser, login } = require("../controlar/userCon");

const userRoutes = require("express").Router();

userRoutes.get("/", getAlluser);
userRoutes.post("/signup", createUser);
userRoutes.post("/login", login);

module.exports = userRoutes;
