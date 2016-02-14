angular.module('openracer.controllers', ['openracer.data']).
    controller('driversCtrl', function($scope, $modal, $routeParams, events, eventDrivers) {
        $scope.eventId = $routeParams.eventId;

        $scope.event = events.get({id: $scope.eventId});
        $scope.drivers = eventDrivers.query();

        $scope.setActive = function(driver) {
            $scope.active = driver;
        };

        $scope.edit = function(driver) {
            $scope.editing = driver;
            $scope.active = driver;
        };

        $scope.save = function() {
            console.log($scope.editing);
        };

        $scope.cancel = function() {
            delete($scope.editing);
        };

        $scope.newDriver = function() {
            $modal({
                title: "New Driver",
                contentTemplate: "/static/partials/driver-new.tpl.html",
                show: true,
                scope: $scope.$new()
            });
        };

        $scope.findDriver = function() {
            $modal({
                title: "Find Driver",
                contentTemplate: "/static/partials/driver-find.tpl.html",
                show: true,
                scope: $scope.$new()
            })
        }

        $scope.$on('openracer.event.driver-added', function(event, entry) {
            $scope.drivers.push(eventDrivers.get({id: entry}));
        });
    }).
    controller('newDriverCtrl', function($scope, $routeParams, drivers, cars, numbers, classes, eventDrivers) {
        if($routeParams.eventId)
            $scope.eventId = $routeParams.eventId;

        $scope.tabs = [
            {
                title: "Basic Info",
                template: "/static/partials/driver-new-tab1.tpl.html",
                order: 0
            },
            {
                title: "Cars",
                template: "/static/partials/driver-new-tab2.tpl.html",
                order: 1
            },
            {
                title: "Review",
                template: "/static/partials/driver-new-tab3.tpl.html",
                order: 2
            }
        ];

        $scope.classes = classes.query();

        $scope.tabs.activeTab = 0;

        $scope.nextTab = function () {
            if($scope.tabs.activeTab < 2)
                $scope.tabs.activeTab++;

            if($scope.tabs.activeTab == 2) {
                $scope.addCar()
            }
        };

        $scope.addCar = function() {
            if($scope.carValid($scope.currentCar)) {
                $scope.cars.push($scope.currentCar);
                $scope.currentCar = {};
            }
        };

        $scope.carValid = function(car) {
            if(!car)
                return false;
            if(!car.hasOwnProperty('make') || car.make == null)
                return false;
            if(!car.hasOwnProperty('model') || car.model == null)
                return false;
            if(!car.hasOwnProperty('year') || car.year == null || !car.year.match(/\d{2}|\d{4}/))
                return false;
            if(!car.hasOwnProperty('car_class') || car.car_class == null)
                return false;

            return true;
        };

        $scope.editCar = function(car) {
            $scope.currentCar = car;
            var idx = $scope.cars.indexOf(car);
            if(idx >= 0)
                $scope.cars.splice(idx, 1);
        };

        $scope.deleteCar = function(car) {
            var idx = $scope.cars.indexOf(car);
            if(idx >= 0)
                $scope.cars.splice(idx, 1);
        };

        $scope.prevTab = function () {
            if($scope.tabs.activeTab > 0)
                $scope.tabs.activeTab--;

            if($scope.tabs.activeTab == 0) {
                $scope.addCar()
            }
        };

        $scope.driver = {};
        $scope.currentCar = {};
        $scope.cars = [];

        $scope.save = function() {
            var eventDriver = {
                "event": $scope.eventId,
                driver: null,
                car: null,
                number: null
            };

            function eventDriverReady(obj) {
                return obj.event && obj.driver && obj.car && obj.number;
            }

            drivers.save({}, $scope.driver).$promise.then(function(data) {
                $scope.$emit('openracer.driver.created', data);
                eventDriver.driver = data.id;

                numbers.save({}, {number: $scope.driver.number, driver: data.id}).$promise.then(function(numberData) {
                    $scope.$emit('openracer.number.created', numberData);
                    eventDriver.number = numberData.id;
                    if(eventDriverReady(eventDriver)) {
                        eventDrivers.save({}, eventDriver).$promise.then(function(eventDriverData) {
                            $scope.$emit('openracer.event.driver-added', eventDriverData.id);
                            $scope.$hide();
                        });
                    }

                    drivers.update({id: data.id}, {default_number: numberData.id});
                });

                angular.forEach($scope.cars, function(val, key) {
                    val.driver_list = [data.id];
                    cars.save({}, val).$promise.then(function(carData) {
                        $scope.$emit('openracer.car.created', carData);

                        if(val.default) {
                            eventDriver.car = carData.id
                            if(eventDriverReady(eventDriver)) {
                                eventDrivers.save({}, eventDriver).$promise.then(function(eventDriverData) {
                                    $scope.$emit('openracer.event.driver-added', eventDriverData.id);
                                    $scope.$hide();
                                });
                            }

                            drivers.update({id: data.id}, {default_car: carData.id});
                        }
                    });
                });
            });
        };

        $scope.cancel = function() {
            $scope.$hide();
        };
    })
    .controller('findDriverCtrl', function($scope, $routeParams, drivers, eventDrivers) {
        if($routeParams.eventId)
            $scope.eventId = $routeParams.eventId;

        $scope.add = function(driver) {
            var eventDriver = {
                "event": $scope.eventId,
                driver: driver.id,
                car: driver.default_car.id,
                number: driver.default_number.id
            };

            eventDrivers.save({}, eventDriver).$promise.then(function(data) {
                $scope.$emit('openracer.event.driver-added', data.id);
            });
        };

        $scope.drivers = drivers.query();
    });
