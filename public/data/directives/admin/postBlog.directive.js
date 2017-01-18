function postBlog() {
	return{
		restrict: 'E',
		templateUrl: "./partials/admin/components/admin.postBlog.html"

	};
}

angular
	.module('app')
	.directive('postBlog', postBlog);