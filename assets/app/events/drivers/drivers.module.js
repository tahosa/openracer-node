(function() {
    'use strict';

    angular
        .module('openracer.events.drivers', [
            'ngRoute',
            'openracer.events'
        ])
        .config(Config);

    Config.$inject = ['$routeProvider'];
    function Config($routeProvider) {
        $routeProvider
            .when('/events/:eventId/drivers', {
                templateUrl: '/app/events/drivers/drivers.tpl.html',
                controller: 'Drivers',
                controllerAs: 'drivers'
            });
    }
})();
