requirejs.config({
    baseUrl: 'js',
    paths: {
        angular: 'angular/angular',
        angular_animate: 'angular/angular-animate.min',
        angular_aria: 'angular/angular-aria.min',
        angular_cookies: 'angular/angular-cookies.min',
        angular_loader: 'angular/angular-loader.min',
        angular_message: 'angular/angular-message-format.min',
        angular_route: 'angular/angular-route.min',
        angular_sanitize: 'angular/angular-sanitize.min',
        angular_touch: 'angular/angular-touch.min',
        angular_ui_router: 'angular/angular-ui-router.min',
        ui_bootstrap: 'angular-ui/ui-bootstrap-tpls-2.2.0.min',
        bootstrap: 'bootstrap/bootstrap.min',
        jquery: 'jquery-3.1.1.min',
        google: 'googleAnalutics',
        app: 'app',
        routes: 'routes',
        homeController: 'controllers/homeController',
        ecomerceController: 'controllers/ecomerceController',
        galleryController: 'controllers/galleryController',
        madlibsController: 'controllers/madlibsController',
        resumeController: 'controllers/resumeController',
        shopcontroller: 'controllers/shopcontroller',
        gamejamcontroller: 'controllers/gamejamController',
        unitycontroller: 'controllers/unityController',
    },
    shim: {
        angular: {
            exports: "angular",
            deps: ["jquery"]
        },
        angular_animate: {
            exports: "angular",
            deps: ["angular"]
        },
        angular_aria: {
            exports: "angular_animate",
            deps: ["angular"]
        },
        angular_cookies: {
            exports: "angular_cookies",
            deps: ["angular"]
        },
        angular_loader: {
            exports: "angular_loader",
            deps: ["angular"]
        },
        angular_message: {
            exports: "angular_message",
            deps: ["angular"]
        },
        angular_route: {
            exports: "angular_route",
            deps: ["angular"]
        },
        angular_sanitize: {
            exports: "angular_sanitize",
            deps: ["angular"]
        },
        angular_touch: {
            exports: "angular_touch",
            deps: ["angular"]
        },
        angular_ui_router: {
            exports: "angular_ui_router",
            deps: ["angular"]
        },
        bootstrap: {
            exports: "bootstrap",
            deps: ["jquery"]
        },
        ui_bootstrap:{
            exports:"ui_bootstrap",
            deps:["bootstrap","angular"]
        },
        google: {
            exports: "google",
            deps: ["jquery"]
        },
        app: {
            exports: "app",
            deps: ["angular","angular_animate","angular_aria","angular_cookies","angular_loader",
            "angular_message","angular_route","angular_sanitize","angular_touch","angular_ui_router",
            "bootstrap","google","ui_bootstrap"]
        },
        routes:{
            exports:"routes",
            deps:["app"]
        },
        homeController:{
            exports:"homeController",
            deps:["routes"]
        },
        ecomerceController:{
            exports:"ecomerceController",
            deps:["routes"]
        },
        galleryController:{
            exports:"galleryController",
            deps:["routes"]
        },
        madlibsController:{
            exports:"madlibsController",
            deps:["routes"]
        },
        resumeController:{
            exports:"resumeController",
            deps:["routes"]
        },
        shopcontroller:{
            exports:"shopcontroller",
            deps:["routes"]
        },
        gamejamcontroller:{
            exports:"gamejamcontroller",
            deps:["routes"]
        },
        unitycontroller:{
            exports:"unitycontroller",
            deps:["routes"]
        },                
    }

});

requirejs(["angular","angular_animate","angular_aria","angular_cookies","angular_loader","angular_message",
            "angular_route","angular_sanitize","angular_touch","angular_ui_router","ui_bootstrap","bootstrap",
            "jquery","google",
            "app","routes","homeController","ecomerceController","galleryController","madlibsController",
            "resumeController","shopcontroller","gamejamcontroller","unitycontroller"
            ],
function(){

})