var mongoose = require('mongoose');
	encrypt = require('../utils/encryption');

var orderSchema = mongoose.Schema({
		user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
		cart:{type: Object, required:true },
		address:{type: String, required:true},
		name:{type: String, required:true},
		paymentId:{type: String, required:true}
		
	});



var User = mongoose.model('Order',orderSchema);