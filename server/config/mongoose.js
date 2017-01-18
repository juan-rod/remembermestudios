var mongoose = require('mongoose');
	// productModel = require('../models/Product'),
	// userModel = require('../models/User');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console,'connection error...'));
	db.once('open',function callback(){
		console.log('rememberme_mean db opened');
	});
	// userModel.createDefaultUsers();
}