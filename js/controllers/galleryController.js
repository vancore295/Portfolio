angular.module('portfolioApp').controller('GalleryController', ['$scope', function ($scope) {
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