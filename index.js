const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes");

dotenv.config();
app.use("/", userRoutes);

mongoose.connect(process.env.DATABASE_URI, () => {
  console.log("Dataqbase Connect");
});
app.listen(4000);
console.log("Server Run");
