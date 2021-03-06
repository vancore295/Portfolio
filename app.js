var app = angular.module('portfolioApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", '/home');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "Templates/home.html",
            controller: 'homeController'
        })
        .state("resume", {
            url: "/resume",
            templateUrl: "Templates/resume.html",
            controller: 'resumeController'
        })
        .state("unityGames", {
            url: "/unityGames",
            templateUrl: "Templates/unity.html",
            controller: 'unityController'
        })
        .state("gameJams", {
            url: "/gameJams",
            templateUrl: "Templates/GameJams.html",
            controller: 'gamejamController'
        })
        .state("madlibs", {
            url: "/madlibs",
            templateUrl: "Templates/madlibs.html",
            controller: 'madlibsController'
        })
        .state("shop", {
            url: "/shop",
            templateUrl: "Templates/ecomerce.html",
            controller: 'eSchopController'
        })
});