
function mainNavBar() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainNav.html"

	};
}

angular
	.module('app')
	.directive('mainNavBar', mainNavBar);