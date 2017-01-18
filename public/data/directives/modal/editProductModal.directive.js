function editModal() {
	return{
		restrict: 'E',
		templateUrl: "./partials/modals/editModal.html",
		controller: 'AdminController'

	};
}

angular
	.module('app')
	.directive('editModal', editModal);