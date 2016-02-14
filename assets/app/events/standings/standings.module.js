(function() {
    'use strict';

    angular
        .module('openracer.events.standings', [
            'ngRoute',
            'openracer.events'
        ])
        .config(Config);

    Config.$inject = ['$routeProvider'];
    function Config($routeProvider) {
        $routeProvider
            .when('/events/:eventId/standings', {
                templateUrl: '/app/events/standings/standings.tpl.html',
                controller: 'Standings',
                controllerAs: 'standings'
            });
    }
})();
