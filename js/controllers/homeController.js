angular.module('portfolioApp').controller('homeController', ['$scope', '$document', '$uibModal',
    function($scope, $document, $uibModal) {
        $scope.MenuItems = [{
                route: 'unityGames',
                href: '',
                target: '',
                linkLabel: 'Unity Games',
                imageSource: '',
                dataToggle: '',
                dataPlacement: '',
                title: '',
                showImage: false,
                showLabel: true
            },
            {
                route: 'shop',
                href: '',
                target: '',
                linkLabel: 'Shop',
                imageSource: '',
                dataToggle: '',
                dataPlacement: '',
                title: '',
                showImage: false,
                showLabel: true
            },
            {
                route: 'resume',
                href: '',
                target: '',
                linkLabel: 'Resume',
                imageSource: '',
                dataToggle: '',
                dataPlacement: '',
                title: '',
                showImage: false,
                showLabel: true
            },
            {
                route: 'gameJams',
                href: '',
                target: '',
                linkLabel: 'Game Jams',
                imageSource: '',
                dataToggle: '',
                dataPlacement: '',
                title: '',
                showImage: false,
                showLabel: true
            },
            {
                route: '',
                href: 'https://github.com/vancore295',
                target: '_blank',
                linkLabel: 'Github',
                imageSource: 'img/GitHub-Mark-64px.png',
                dataToggle: 'tooltip',
                dataPlacement: 'left',
                title: 'Github',
                showImage: true,
                showLabel: false
            },
        ];
        $scope.OpenContact = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'Templates/ContactModal.html',
                controller: 'homeController'
            })
        }
    }
]);