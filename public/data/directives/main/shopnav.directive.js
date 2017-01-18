
function shopNavBar() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/shopNav.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('shopNavBar', shopNavBar);