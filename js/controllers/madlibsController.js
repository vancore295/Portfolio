angular.module('portfolioApp').controller('madlibsController', ['$scope', function($scope) {
    $scope.title = "Madlibs";

    $scope.ResetGame = function(words) {
        for (var word in words) {
            words[word] = '';
        }
        return words;
    }
}]);