(function() {
    'use strict';

    angular.module('openracer.drivers')
        .factory('DriverData', DriverData);

    DriverData.$inject = [ '$resource' ];
    function DriverData($resource) {
        var drivers = {
            drivers: $resource('/api/drivers/:id/', {}, {
                     update: { method: 'PATCH' }
                }),
            cars: $resource('/api/cars/:id/'),
            numbers: $resource('/api/numbers/:id/'),
            classes: $resource('/api/classes')
        };

        return drivers;
    }
})();
