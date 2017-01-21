
function shippingForm() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/checkout/shippingForm.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('shippingForm', shippingForm);