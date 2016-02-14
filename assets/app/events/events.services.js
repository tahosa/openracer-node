(function(){
    'use strict';

    angular.module('openracer.events')
        .factory('EventData', EventData)
        .factory('DriverData', DriverData);

    EventData.$inject = ['$resource'];
    function EventData($resource) {
        var events = {
            data: null,
            service: $resource('/api/events/:id')

        };

        return events;
    }

    DriverData.$inject = ['$resource'];
    function DriverData($resource) {
        var drivers = {
            data: this.service.query(),
            service: $resource('/api/event/:id/drivers')
        };

        return drivers;
    };
})();
