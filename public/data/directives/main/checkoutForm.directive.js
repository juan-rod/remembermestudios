
function checkoutForm() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/checkout/checkoutForm.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('checkoutForm', checkoutForm);