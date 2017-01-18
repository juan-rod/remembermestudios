function MainController($scope,firebase, $firebaseArray) {
	$scope.store = [];
	var ref = firebase.database().ref().child("product_images");
  	$scope.store = $firebaseArray(ref);

  	$scope.loginModal = function(){
  		console.log("test");
  		$('#loginModal').modal(); 
  	}

	$scope.subscribe = function(){
		swal("Oops!", "Subscriptions are coming soon!", "warning");
	}


}

MainController.$inject=['$scope','firebase', '$firebaseArray']; 
angular
	.module('app')
	.controller('MainController', MainController);