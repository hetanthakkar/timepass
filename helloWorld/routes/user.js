var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");
router.get("/", async (req, res, next) => {
  let user = new User({
    name: "Hetan Thakkar",
    userName: "hetan",
    gender: "Male",
    state: "Gujarat",
    city: "Bhavnagar",
    skill: [
      { skill: "coding", specific: "Javascript", price: 50, lessons: 5 },
      { skill: "coding", specific: "C++", price: 100, lessons: 6 },
    ],
    teachTime: "2:00 PM - 5:00 PM",
    location: "My house",
    bio: "Hey There bitches",
    email: "req.body.email@gmail.com",
    password: "password",
  });
  await user.save();
  let token = jwt.sign({ userId: user._id }, "hetan");
  res.status(201).send({ data: token });
});
module.exports = router;
