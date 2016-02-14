(function(){
    'use strict';

    angular.module('openracer.events.manager')
        .factory('NewEventService', NewEventService);

    NewEventService.$inject = [ '$modal', 'EventData' ];
    function NewEventService($modal, data) {
        var event = {
            data: null,
            save: save,
            cancel: cancel,
            show: show,
            hide: hide,
            modal: $modal({
                    title: 'New Event',
                    contentTemplate: '/app/events/manager/new.tpl.html',
                    show: false,
                    controller: 'NewEvent',
                    controllerAs: 'event'
                })
        };

        return event;

        function save() {
            if(event.data.hasOwnProperty('$save')) {
                event.data.$save();
            } else {
                event.data = data.service.save(event.data);
            }

            data.data = data.service.get();
            event.modal.hide();
        };

        function cancel() {
            if (event.data) {
                event.data = null;
            }

            event.modal.hide();
        };

        function show() {
            event.modal.show();
        }

        function hide() {
            event.modal.hide();
        }
    }
})();
