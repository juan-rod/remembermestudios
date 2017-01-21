var mongoose = require('mongoose');
	encrypt = require('../utils/encryption');

var userSchema = mongoose.Schema({
		email: {type: String, required:true},
		password: {type: String, required: true},
		salt: {type: String, required: '{PATH} is required!'},
		hashed_pwd: {type: String, required: '{PATH} is required!'}
	});

	userSchema.methods = {
		authenticate: function(passwordToMatch) {
			return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
		}
	}

var User = mongoose.model('User',userSchema);