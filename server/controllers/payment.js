var stripe = require("stripe")("sk_test_nu0U1sjL417fGifTZF6DSS9r");

// Get the credit card details submitted by the form
	exports.charge = function(req,res){
		var amount = req.body.price * 100;
		var token = req.body.stripeToken; // Using Express
		 console.log("token from server?:",token);
		 console.log("amount:",amount);

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
	           	res.sendStatus(204);
	           	// res.sendStatus(200);
	        }
		});
	}