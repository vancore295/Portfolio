app.controller('MainController', ['$scope', function ($scope) {
  $scope.title = "Madlibs";

  $scope.master = {};

  $scope.update = function (greet) {
    $scope.angular.master.cope(greet);
  };

  $scope.update = function (war) {
    $scope.angular.master.cope(war);
  };

  $scope.update = function (proverb) {
    $scope.angular.master.cope(proverb);
  };

  $scope.reset = function () {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);