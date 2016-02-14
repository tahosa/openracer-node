(function() {
    'use strict';

    angular
        .module('openracer.events.runs', [
            'ngRoute',
            'openracer.events'
        ])
        .config(Config);

    Config.$inject = ['$routeProvider'];
    function Config($routeProvider) {
        $routeProvider
            .when('/events/:eventId/runs', {
                templateUrl: '/app/events/runs/runs.tpl.html',
                controller: 'EventRuns',
                controllerAs: 'runs'
            });
    }
})();
