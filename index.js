const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoutes = require("./Routes/userRoutes");

dotenv.config();
app.use(morgan("common"));
app.use(express.json());
app.use("/api/user", userRoutes);

mongoose.connect(process.env.DATABASE_URI, () => {
  console.log("Dataqbase Connect");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log("Server Run");
