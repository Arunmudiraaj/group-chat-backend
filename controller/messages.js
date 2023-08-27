const User = require("../models/user");

module.exports.sendMessage = async (req, res) => {
  console.log(req.body);
  console.log("User is", req.user);
  const user = await User.findByPk(req.user.userId);
  user.createMessage({
    userEmail: user.dataValues.email,
    messageBody: req.body.msg,
  });
  res.end();
};
