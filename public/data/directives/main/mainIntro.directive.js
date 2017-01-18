
function mainIntro() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/mainIntro.html"

	};
}

angular
	.module('app')
	.directive('mainIntro', mainIntro);