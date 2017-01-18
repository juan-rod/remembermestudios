
function mainProduct() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainProduct.html"

	};
}

angular
	.module('app')
	.directive('mainProduct', mainProduct);