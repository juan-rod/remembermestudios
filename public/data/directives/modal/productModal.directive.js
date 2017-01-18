function productModal() {
	return{
		restrict: 'E',
		templateUrl: "../partials/modals/productModal.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('productModal', productModal);