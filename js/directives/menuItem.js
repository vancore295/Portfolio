angular.module('portfolioApp').directive('menuItem', function() {
    return {
        scope: {

        },
        restrict: 'E',
        replace: false,
        templateUrl: 'Templates/menuItem.html',
        conrtoller: 'menuItemController'
    }
});