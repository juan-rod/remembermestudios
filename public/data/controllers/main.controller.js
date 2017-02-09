function MainController($scope,firebase, $firebaseArray) {
	$scope.store = [];
	var ref = firebase.database().ref().child("product_images");
  	$scope.store = $firebaseArray(ref);
  	$scope.email=[];

  	$scope.loginModal = function(){
  		console.log("test");
  		$('#loginModal').modal(); 
  	}

	$scope.subscribe = function(email){
		if(email ==''){
			swal("Sorry!", "Looks like you didn't leave an email address", "error");
		}else{
			var emailData = {email: email};
			var subscrips = firebase.database().ref().child("subscriptions");
			var newPostKey = subscrips.push().key;
			var updates = {};
				emailData.id = newPostKey;
			  	updates['/subscriptions/' + newPostKey] = emailData;
			  	this.email = '';
		  	
			swal("Got it!", "Look for a newsletter soon!", "success");
		  	return firebase.database().ref().update(updates);
			
		}
	}
	$('[data-toggle="tooltip"]').tooltip();


}

MainController.$inject=['$scope','firebase', '$firebaseArray']; 
angular
	.module('app')
	.controller('MainController', MainController);