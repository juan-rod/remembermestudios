
function mainHeader() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainHeader.html"

	};
}

angular
	.module('app')
	.directive('mainHeader', mainHeader);