
function customerForm() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/checkout/customerForm.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('customerForm', customerForm);