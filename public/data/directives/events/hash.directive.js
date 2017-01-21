function phash() {
   return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
          function doHash(str){
            var hash = 0;
            for(var i=0; i<str.length; i++) {
              var char = str.charCodeAt(i);
              hash = ((hash<<5)-hash)+char;
            }
            return hash;
          };
          ngModel.$parsers.push(function(value) {
            return doHash(value);
          });   
        }
    };
}

angular
  .module('app')
  .directive('phash', phash);