var	mongoose = require('mongoose'),
	payment = require('../controllers/payment'),
	email = require('../controllers/email'),
	passport = require('passport');
	// router = express.Router();
module.exports = function(app){
	// app.use(csrfProtection);
	app.post('/',email.handleSayHello);

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

	// app.get('/cart', function(req,res,next){
	// 	var productId = req.params.id;
	// 	var cart = new Cart(req.session.cart ? req.session.cart : {});
	// })

	// app.get('/signup',function(req,res){
	// 	res.render('partials/views/signup');
	// });
	// app.post('/signup', passport.authenticate('local.signup',{
	// 	successRedirect: '/profile',
	// 	failureRedirect: '/signup',
	// 	failureFlash: true
	// }))
	// app.get('/profile',function(req,res){
	// 	res.render('partials/views/profile');
	// })
	app.get('/checkout', function(req,res){
		res.send('checkout page is working');
	});

	app.post('/checkout', payment.checkout);

	app.get('/', function(req, res){
		res.render('index.html');
	});
	// app.get('*', function(req, res){
	// 	res.render('index.html');
	// })
}

