(function() {
    'use strict';

    angular.module('openracer')
        .controller('Index', Index);

    Index.$inject = ['$scope', 'ViewService', 'EventData', 'NewEventService'];
    function Index($scope, views, events, newEventSvc) {
        var vm = this;
        vm.events = events.data;
        vm.newEvent = newEventSvc;
        vm.views = views;

        activate();

        function activate() {
            if(!events.data) {
                events.data = events.service.query();
            }
        }
    }
})();
