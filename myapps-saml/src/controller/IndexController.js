(function () {
	"use strict";
}());
var path = require("path"),
	passport = require('passport'),
	saml = require('passport-saml'),
	fs = require('fs');

module.exports = {
	index: function (req, res) {
		res.status(200).send("hi");
	},
	login: function (req, res, next) {
		console.log('-----------------------------');
		console.log('/Start login handler');
		next();
	},
	callback: function (req, res, next) {
		console.log('-----------------------------');
		console.log('/Start login callback');
		next();
	},
	callbacksuccess: function (req, res) {
		console.log('-----------------------------');
        console.log('login call back dumps');
        console.log(req.user);
        console.log('-----------------------------');
        res.send('Log in Callback Success');
	},
	default: function (req, res) {
		res.status(404).send("Error");
	}
};
