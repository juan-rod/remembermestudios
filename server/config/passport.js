var passport = require('passport'),
	mongoose = require('mongoose'),
	LocalStrategy = require('passport-local').Strategy,
	// User = require('mongoose').model('User'),
	encrypt = require('../utils/encryption');

module.exports = function(){

	passport.serializeUser(function(user,done){
		if(user) {
			done(null, user._id);
		}
	});
	passport.deserializeUser(function(id,done) {
		User.findOne({_id:id}).exec(function(err,user) {
			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		})
	});
	passport.use('local.signup',new LocalStrategy({
		usernameField :'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email,password,done) {
			User.findOne({email:email}).exec(function(err,user) {
				if(err){
					return done(err);
				}
				if(user) {
					return done(null, false, {message: 'Email is already in use.'});
				}
				// if(!user) {
				// 	 usr = new User({ 
				// 		email: email,
				// 		password: password,
				// 		salt: encrypt.createSalt(),
				// 		hashed_pwd: encrypt.hashPwd(userData.salt, userData.password)
				// 	 });

			 //         usr.save(function(err) {
				//          if(err) {
				//                console.log(err);
				//          } else {
				//                console.log('user: ' + usr.email + " saved.");
				// 				return done(null,user);
				//          }
				// 	}) 
				// }
			})
	}));


}