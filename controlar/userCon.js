const User = require("../modules/userModules");

// Crate Users
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
      message: "Somting Rong",
    });
  }
};
// Single Users
