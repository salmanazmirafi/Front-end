const { getAlluser } = require("../controlar/userCon");

const userRoutes = require("express").Router();

userRoutes.get("/", getAlluser);

module.exports = userRoutes;
