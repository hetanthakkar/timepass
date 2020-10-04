var express = require("express");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var userRouter = require("./routes/user");
var bodyParser = require("body-parser");
var requireToken = require("./routes/requireToken");
var Model = require("./models/user");
var app = express();
var mongoDB =
  "mongodb+srv://hetan:523212523212@cluster0.zveur.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected")
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
// app.use("/", requireToken, indexRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
module.exports = app;
