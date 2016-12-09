angular.module('portfolioApp').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when("", '/home');
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'Templates/home.html',
                controller: 'homeController'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'Templates/resume.html',
                controller: 'resumeController'
            })

    }
])