const User = require("../modules/userModules");
const bcrypt = require("bcrypt");

// Crate Users
exports.createUser = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 11);
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "User Already Exists! Login Instead",
      });
    }

    const user = new User({
      name,
      email,
      password,
      blogs: [],
    });

    try {
      await user.save();
    } catch (error) {
      return console.log(err);
    }

    res.status(201).json({
      message: "User Create Successful",
      user,
    });
  } catch (error) {
    res.status(500).status({
      message: "Something Wrong",
      error,
    });
  }
};
// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingMail = await User.findOne({ email });

    if (!existingMail) {
      res.status(400).json({
        message: "User Not Found",
      });
    }
    const validated = await bcrypt.compare(password, existingMail.password);
    if (!validated) {
      res.status(400).json({
        message: "Wrong User",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user: existingMail,
    });
  } catch (error) {
    res.status(500).status({
      message: "Something Wrong",
      error,
    });
  }
};
// Update Users
// Delete Users
// All Users
exports.getAlluser = async (req, res) => {
  try {
    const allUser = await User.find();
    if (!allUser) {
      res.status(400).json({
        message: "User Not Found",
      });
    }
    res.status(200).json({
      message: "User Result",
      allUser,
    });
  } catch (error) {
    res.status(500).status({
      message: "Something Wrong",
    });
  }
};
// Single Users
