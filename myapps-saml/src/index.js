/*
 *Apps Name: COMP5311 SAML
 *Author: Nick, Yip Tim Yan
 */
(function () {
	"use strict";
}());
let express = require("express"),
	app = express(),
	path = require("path"),
	engines = require('consolidate'),
	bodyParser = require("body-parser"),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	passport = require('passport'),
	saml = require('passport-saml'),
	fs = require('fs'),
	index = require(path.join(__dirname, "/routes/index"));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
	secret: 'secret', 
	resave: false,
	saveUninitialized: true
	}));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
var samlStrategy = new saml.Strategy({
			callbackUrl: 'http://localhost/login/callback',
			entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
			issuer: 'comp5311-saml',
			identifierFormat: null,
			decryptionPvk: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
			privateCert: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
			validateInResponseTo: false,
			disableRequestedAuthnContext: true
		}, function(profile, done) {
			console.log("Logon Success")
			return done(null, profile);
		});

passport.use('samlStrategy', samlStrategy);
app.use(passport.initialize({}));
app.use(passport.session({}));

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'html');

app.use("/", index);

module.exports = app;
