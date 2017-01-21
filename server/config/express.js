var express = require('express'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	session = require('express-session');

// var csrfProtection = csrf();
module.exports = function(app, config){
	require('./passport')(passport);
	// function compile(str,path){
	// 	return stylus(str).set('filename',path);
	// }

	app.set('public', config.rootPath + '/public');
	// app.set('view engine', 'html');
	// app.engine('html', require('ejs').renderFile);
	// app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');
	app.use(cookieParser());
	app.use(session({secret: 'supersecret', resave: false, saveUninitialized:false}));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(passport.initialize());
	app.use(passport.session());   
	app.use(express.static(config.rootPath + '/public'));
}
