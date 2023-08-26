const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    // console.log("The user is", user);
    if (!user) {
      res
        .status(404)
        .json({ message: "User with the provided email did'nt found!" });
      return;
    }
    const authorized = await bcrypt.compare(password, user.dataValues.password);
    // console.log("Auth is", authorized);
    if (authorized) {
      const userObj = {
        userId: user.dataValues.id,
        email: user.dataValues.email,
      };
      return res.status(200).json({ token: getJWT(userObj) });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (e) {
    res.status(400).json({ message: "Something went wrong!" });
  }
};

function getJWT(obj) {
  console.log("Secret jwt key is ", process.env.SECRET_JWT_KEY);
  return jwt.sign(obj, process.env.SECRET_JWT_KEY);
}
