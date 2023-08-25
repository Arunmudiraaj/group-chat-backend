const User = require("../models/user");
const bcrypt = require("bcrypt");
module.exports.userSignUp = async (req, res) => {
  const body = req.body;
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    await User.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User got created successfully" });
  } catch (e) {
    if (e.name && e.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ message: "Email already registered" });
    } else {
      res.status(400).json({ message: "Something went wrong!" });
    }
  }
};
