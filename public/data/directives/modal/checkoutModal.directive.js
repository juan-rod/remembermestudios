function checkoutModal() {
	return{
		restrict: 'E',
		templateUrl: "../partials/modals/checkoutModal.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('checkoutModal', checkoutModal);