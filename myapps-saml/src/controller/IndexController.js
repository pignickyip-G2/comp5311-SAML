(function () {
	"use strict";
}());
var path = require("path"),
	passport = require('passport'),
	saml = require('passport-saml'),
	fs = require('fs');

module.exports = {
	index: function (req, res) {
		res.status(200).redirect("/login");
	},
	login: function (req, res, next) {
		next();
	},
	callback: function (req, res, next) {
		console.log('go to login callback');
		next();
	},
	callbacksuccess: function (req, res) {
		console.log('User login call back success');
        res.status(200).redirect("/home");
	},
	gohome: function (req, res) {
		res.status(200).send("succss");
	},
	metadata: function (req, res) {
		next();
	},
	default: function (req, res) {
		res.status(404).redirect("/login");
	}
};
