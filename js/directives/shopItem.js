angular.module('portfolioApp').directive('storeItem', function() {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            cart: '='
        },
        templateUrl: 'js/directives/Templates/shopItem.html',
        controller: 'shopItemController'
    };
});