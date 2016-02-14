(function(){
    'use strict';

    angular
        .module('openracer.events.manager', [
            'ngRoute',
            'mgcrea.ngStrap'
        ])
        .config(Config);

    Config.$inject = [ '$routeProvider' ];
    function Config($routeProvider) {
        $routeProvider
            .when('/events/:eventId/manage', {
                templateUrl: '/app/events/manager/manager.tpl.html',
                controller: 'EventManager',
                controllerAs: 'manager'
            });
    }
})();
