(function() {
    'use strict';

    angular.module('openracer.events')
        .controller('NewEvent', NewEvent);

    NewEvent.$inject = [ '$scope', 'NewEventService' ];
    function NewEvent($scope, event) {
        var vm = this;
        vm.event = event;
        vm.data = {};
    }
})();
