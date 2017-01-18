
function mainFooter() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainFooter.html"

	};
}

angular
	.module('app')
	.directive('mainFooter', mainFooter);