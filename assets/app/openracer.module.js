(function() {
    'use strict';

    angular.module('openracer', [
        // External references
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'mgcrea.ngStrap',

        // Feature references
        'openracer.events'
    ])
    .config([
        '$routeProvider',
        '$locationProvider',
        '$httpProvider',
        '$resourceProvider',
        function($routeProvider, $locationProvider, $httpProvider, $resourceProvider) {
            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false
                });

            $resourceProvider.defaults.stripTrailingSlashes = false;

            $routeProvider
                .when('/', {
                    templateUrl: '/app/home.tpl.html',
                    controller: 'Index',
                    controllerAs: 'idx'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
})();
