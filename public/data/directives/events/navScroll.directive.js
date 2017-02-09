function navScroll($window, $timeout) {
	 return {
      restrict: 'A',
      link: function (scope, element, attrs) {

      	function getheight(){
			var navbar = angular.element(document.querySelector('#navbar')),
			    mainheader = angular.element(document.querySelector('#navChange')),
				navbar_height = navbar[0].offsetHeight,
				mainheader_height = mainheader[0].offsetHeight,
				fix_class = 'red',
				scroll_top = document.body.scrollTop ;

				 if (scroll_top >= navbar_height) {
				 	navbar.addClass(fix_class);
				 }else{
				 	navbar.removeClass(fix_class);
				 }
      	}

		    $timeout(function (){
				$(window).scroll(getheight);
				scope.$apply();
			},10);
      }
    };
}

angular
	.module('app')
	.directive('navScroll', navScroll);