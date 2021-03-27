/*
 *Apps Name: COMP5311
 *Author: Nick, Yip Tim Yan
 */
(function () {
	"use strict";
}());
var express = require("express"),
	app = express(),
	path = require("path"),
	index = require(path.join(__dirname, "/routes/index")),
	bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/", index);

module.exports = app;
