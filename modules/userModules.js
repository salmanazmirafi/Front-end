const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 6,
    },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
  },
  {
    timestamps: true,
  }
);

const userModules = mongoose.model("User", userSchema);
module.exports = userModules;
