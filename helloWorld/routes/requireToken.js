var jwt = require("jsonwebtoken");
var Model = require("../models/user");
module.exports = (req, res, next) => {
  const header = req.header("Authorization");
  const [type, token] = header.split(" ");
  if (!header)
    return res.status(401).send({ message: "you must be logged in" });
  if (type == "Bearer" && typeof token !== undefined) {
    jwt.verify(token, "hetan", async (error, payload) => {
      if (error)
        return res.status(401).send({ error: "your token cant be verified!" });
      const { userId } = payload;
      const user = await Model.findById(userId);
      req.user = user;
      next();
    });
  } else {
    res.status(401).send({ message: "you dont have a proper token" });
  }
};
