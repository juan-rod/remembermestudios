var stripe = require("stripe")("sk_test_nu0U1sjL417fGifTZF6DSS9r");
var Order = require('../models/Order');

// Get the credit card details submitted by the form
	exports.checkout = function(req,res){
		var amount = req.body.price * 100;
		var token = req.body.stripeToken; // Using Express
		 console.log("token from server?:",token);
		 console.log("amount:",amount);
		 console.log("what's in req.body:", req.body);

		var charge = stripe.charges.create({
		  amount: amount, // Amount in cents
		  currency: "usd",
		  source: token,
		  description: "Example charge"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
		    	// The card has been declined
		    	res.sendStatus(500, err);
		  } else {
		  	//will not work bc i need to create the user model
		  	// also need to create the cart model.
		  	// 	var order = new Order({
		  	// 		user:req.user,
		  	// 		cart: cart,
					// address: req.body.address,
					// name: req.body.fname + ' ' +req.body.lname,
					// paymentId: charge.id
		  	// 	})

		  	// 	order.save(function(err,result){
		  	// 		res.sendStatus(204);
		  	// 	})
		  			res.sendStatus(204);
	        }
		});
	}