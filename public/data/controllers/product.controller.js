function ProductController($scope, $routeParams, firebase, $firebaseArray) {


$scope.productId= $routeParams.id;
var id = $scope.productId
var ref = firebase.database().ref().child("product_images");
$scope.product=[];
 
$scope.listOfProducts = $firebaseArray(ref);

$scope.listOfProducts.$loaded().then(function(x) {
	   var product= x.$getRecord(id);
	    $scope.product.push(product);

	}).catch(function(error) {
	    console.log("Error:", error);
});

}
ProductController.$inject=['$scope', '$routeParams','firebase','$firebaseArray'];
angular
	.module('app')
	.controller('ProductController', ProductController);