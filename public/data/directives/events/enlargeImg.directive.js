function enlarge($window) {

    function getElementOffset (element) {
            var de = document.documentElement;
            var box = element.getBoundingClientRect();
            var top = box.top + window.pageYOffset - de.clientTop;
            var left = box.left + window.pageXOffset - de.clientLeft;
            return { top: top, left: left };
    }

    return {
        restrict: 'A',
        
        link: function (scope, element, attr) {
          console.log("element:",element);
                var expanded = false,
                    cloned = element.clone(true),
                    offset = getElementOffset(element[0]);
                cloned.addClass('large');
                cloned.attr('src', attr.src);
                cloned.css('top', offset.top + 'px');
                cloned.css('left', offset.left + 'px');
                cloned.bind('click', function () {
                    if (expanded) {
                        cloned.removeClass('expanded');
                        expanded = false;
                    } else {
                        cloned.addClass('expanded');
                        expanded = true;
                    }
                });
                element.parent().append(cloned);
                angular.element($window).bind('scroll', function () {
                    if (expanded) {
                        cloned.removeClass('expanded');
                        expanded = false;
                    }
                });
            }
    };
}

angular
  .module('app')
  .directive('enlarge', enlarge);

