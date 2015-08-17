app.controller('MainController', ['$scope', function ($scope) {
  $scope.title = "Madlibs";
  
  $scope.master = {};

  $scope.update = function (user) {
    $scope.angular.master.cope(user);
  };

  $scope.reset = function () {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);