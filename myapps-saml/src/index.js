/*
 *Apps Name: COMP5311 SAML
 *Author: Nick, Yip Tim Yan
 */
(function () {
	"use strict";
}());
var express = require("express"),
	app = express(),
	path = require("path"),
	bodyParser = require("body-parser"),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	passport = require('passport'),
	saml = require('passport-saml'),
	fs = require('fs'),
	index = require(path.join(__dirname, "/routes/index"));

app.use(bodyParser.json());
app.use(session({
	secret: 'secret', 
	resave: false,
	saveUninitialized: true,
	}));
	
passport.serializeUser(function(user, done) {
    console.log('-----------------------------');
    console.log('serialize user');
    console.log(user);
    console.log('-----------------------------');
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    console.log('-----------------------------');
    console.log('deserialize user');
    console.log(user);
    console.log('-----------------------------');
    done(null, user);
});
var samlStrategy = new saml.Strategy({
			callbackUrl: 'http://localhost/login/callback',
			entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
			issuer: 'saml-poc',
			identifierFormat: null,
			decryptionPvk: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
			privateCert: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
			validateInResponseTo: false,
			disableRequestedAuthnContext: true
		}, function(profile, done) {
			return done(null, profile);
		});

passport.use('samlStrategy', samlStrategy);
app.use(passport.initialize({}));
app.use(passport.session({}));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use("/", index);

module.exports = app;
