var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser');

module.exports = function(app, config){

	// function compile(str,path){
	// 	return stylus(str).set('filename',path);
	// }

	app.set('public', config.rootPath + '/public');
	// app.set('view engine', 'html');
	// app.engine('html', require('ejs').renderFile);
	// app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'ejs');

	// app.use('public/vendor',  express.static(config.rootPath + '/vendor')); 
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));   
	app.use(express.static(config.rootPath + '/public'));
}
