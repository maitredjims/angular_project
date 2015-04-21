(function(){
    'use strict';
    
    var app = angular.module('mainApp', [ 'ngRoute' ]);
    
    app.directive('p5Header', function(){
        return {
            restrict: 'ECA',
            templateUrl: 'module/src/tmpl/p5Header.html'
        };
    });
    
    app.directive('p5Footer', function(){
        return {
            restrict: 'ECA',
            templateUrl: 'module/src/tmpl/p5Footer.html',
            transcule: false
        };
    });
    
    app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'module/src/tmpl/cover.html'
                })
                        .when('/cours', {
                    templateUrl: 'module/src/tmpl/cours.html'
                })
                .when('/cours/:tutorial', {
                    templateUrl: 'module/src/tmpl/tutorial.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
    }]);
})();