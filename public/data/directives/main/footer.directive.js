
function footer() {
	return{
		restrict: 'E',
		templateUrl: "../partials/components/footer.html"

	};
}

angular
	.module('app')
	.directive('footer', footer);