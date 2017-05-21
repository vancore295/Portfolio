angular.module('portfolioApp').directive('menuItem', function() {
    return {
        scope: {
            itemInfo: '=',
        },
        restrict: 'E',
        replace: false,
        templateUrl: 'js/directives/Templates/menuItem.html',
        controller: 'menuItemController'
    }
});