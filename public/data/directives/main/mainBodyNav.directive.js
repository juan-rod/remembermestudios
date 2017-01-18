
function mainBodyNav() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainBodyNav.html"

	};
}

angular
	.module('app')
	.directive('mainBodyNav', mainBodyNav);