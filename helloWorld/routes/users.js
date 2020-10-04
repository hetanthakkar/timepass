var express = require("express");
var router = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).send({ error: "provide email and password" });
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) return res.status(422).send({ error: "No user exist" });
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "hetan");
    console.log("sdlkfsdlkfm");
    res.send(token);
  } catch (err) {
    return res.status(422).send({ error: "Password is incorrect" });
  }
});

module.exports = router;
