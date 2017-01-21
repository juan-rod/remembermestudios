
function paymentForm() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/checkout/paymentForm.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('paymentForm', paymentForm);