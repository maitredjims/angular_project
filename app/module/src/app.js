(function(){
    'use strict';
    
    var app = angular.module('mainApp', []);
    
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
})();