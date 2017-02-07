function ProductController($scope, $stateParams, firebase, $firebaseArray) {


$scope.productId= $stateParams.id;
var id = $scope.productId
var ref = firebase.database().ref().child("product_images");
$scope.product=[];
 
$scope.listOfProducts = $firebaseArray(ref);

$scope.listOfProducts.$loaded().then(function(x) {
	   var product= x.$getRecord(id);
	   // console.log("product:",product);
	    $scope.product.push(product);

	}).catch(function(error) {
	    console.log("Error:", error);
});

}
ProductController.$inject=['$scope', '$stateParams','firebase','$firebaseArray'];
angular
	.module('app')
	.controller('ProductController', ProductController);