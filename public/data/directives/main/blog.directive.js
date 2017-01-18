
function blogPost() {
	return{
		restrict: 'E',
		templateUrl: "../partials/views/blog.html",
		controller: 'BlogController'

	};
}

angular
	.module('app')
	.directive('blogPost', blogPost);