var mongoose = require('mongoose');
	// userModel = require('./models/User'),
	// orderModel = require('./models/Order');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console,'connection error...'));
	db.once('open',function callback(){
		console.log('rememberme_mean db opened');
	});
	// userModel.createDefaultUsers();
}