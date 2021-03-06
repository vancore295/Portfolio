angular.module('portfolioApp').controller('shopItemController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        $scope.ImageSwitch = function(item) {
            if ($scope.imgsrc == item.imageMain) {
                if (item.imageAlt != '') {
                    $scope.imgsrc = item.imageAlt;
                } else {
                    $scope = item.imageMain;
                }
            } else if ($scope.imgsrc == item.imageAlt) {
                $scope.imgsrc = item.imageMain;
            }
        }


        $scope.AddToCart = function(item) {
            $rootScope.$broadcast("NewItemInCart", item);
        }

    }
]);