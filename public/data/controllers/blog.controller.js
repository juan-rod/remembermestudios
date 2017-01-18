function BlogController($scope,firebase, $timeout, $firebaseObject, $firebaseArray){
	$scope.blog=[];

	var ref = firebase.database().ref().child("blog-posts");

 
  	$scope.blog = $firebaseArray(ref);
	
	
			    
		

}
BlogController.$inject=['$scope','firebase', '$timeout', "$firebaseObject","$firebaseArray"];

angular
	.module('app')
	.controller('BlogController', BlogController);