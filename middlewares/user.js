const jwt = require("jsonwebtoken");
module.exports.authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Token is", token);
  if (!token) {
    return res.status(401).json({ message: "User not authorized" });
  }

  jwt.verify(token, process.env.SECRET_JWT_KEY, (err, obj) => {
    if (err) {
      return res.status(403).json({ message: "Request forbidden" });
    }
    req.user = obj;
    next();
  });
};
