(function() {
    'use strict';

    angular.module('openracer')
        .factory('ViewService', ViewService);

    ViewService.$inject = [ '$location' ];
    function ViewService($location) {
        var views = {
            events: setEvent
        };

        return views;

        function setEvent(event, drivers) {
            if(!event) {
                $location.path('/events');
            }

            if(!drivers) {
                $location.path('/events/' + event.id);
            } else {
                $location.path('/events/' + event.id + '/drivers');
            }
        }
    }
})();
