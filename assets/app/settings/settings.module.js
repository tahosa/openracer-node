(function() {
    'use strict';

    angular
        .module('openracer.settings', [
            'ngRoute',
            'mgcrea.ngStrap'
        ])
        .config(SettingsConfig);

    SettingsConfig.$inject = [ '$routeProvider' ];
    function SettingsConfig($routeProvider) {
        $routeProvider
            .when('/settings', {
                templateUrl: '/static/partials/settings.tpl.html',
                controller: 'Settings',
                controllerAs: 'settings'
            });
    }
})();
