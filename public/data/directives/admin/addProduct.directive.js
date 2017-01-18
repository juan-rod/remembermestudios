
function addProduct() {
	return{
		restrict: 'E',
		templateUrl: "./partials/admin/components/admin.addProduct.html"

	};
}

angular
	.module('app')
	.directive('addProduct', addProduct);