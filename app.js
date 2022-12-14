var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const methodOverride = require("method-override");
// import monggose
const mongoose = require("mongoose");

// connection staycation db
mongoose
  .connect("mongodb://localhost:27017/db_staycation", {
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
  })
  .then(
    () => {
      console.log("Connected to staycation_db");
    },
    (err) => {
      console.log(err);
    }
  );

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// admin endpoint
const adminRouter = require("./routes/admin");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// method override
app.use(methodOverride("_method"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// add static bootstrap
app.use(
  "/sb-admin-2",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
// Admin
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
