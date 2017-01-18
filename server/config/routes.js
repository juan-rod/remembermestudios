var payment = require('../controllers/payment'),
	// auth = require('./auth'),
	// users = require('../controllers/users'),
	mongoose = require('mongoose');
	// User = mongoose.model('User');

module.exports = function(app){

	// app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	// app.post('/api/users', users.createUser);
	// app.put('/api/users', users.updateUser);

	// app.post('/login', auth.authenticate);
	// app.post('/logout', function(req,res) { 
	// 	req.logout();
	// 	res.end();
	// });

	app.get('public/partials/:partialPath', function(req,res){
		res.render('partials/'+ req.params.partialPath);
	});

	app.get('/charge', function(req,res){
		res.send('charge page is working');
	});

	app.post('/charge', payment.charge);

	app.get('/', function(req, res){
		res.render('index.html');
	});
}

