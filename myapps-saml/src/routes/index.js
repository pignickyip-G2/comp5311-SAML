(function () {
	"use strict";
}());
var path = require("path"),
	express = require("express"),
	router = express.Router(),
	passport = require('passport'),
	saml = require('passport-saml'),
	ctrl = require(path.join(__dirname, "/../controller/IndexController.js"));

router.route("/").get(ctrl.index);
router.route("/login").get(ctrl.login,passport.authenticate('samlStrategy'));
router.route("/login/callback").post(ctrl.callback, passport.authenticate('samlStrategy'),ctrl.callbacksuccess);
router.route("*").get(ctrl.default);

module.exports = router;
