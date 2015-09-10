var app = angular.module("gallery", []);
app.controller('GalleryController', ['$scope', function ($scope) {
  $scope.folder = '../img/haiti/';

}]);
app.directive('carousel', function () {
  return {
    restrict: 'E',
    scope: {
      info: '=',

    },
    templateUrl: 'js/directives/carousel.html'
  };
});