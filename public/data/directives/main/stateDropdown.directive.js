
function stateDropdown() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/checkout/stateDropdown.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('stateDropdown', stateDropdown);