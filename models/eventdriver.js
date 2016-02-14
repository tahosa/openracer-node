'use strict';
module.exports = function(sequelize, DataTypes) {
  var EventDriver = sequelize.define('EventDriver', {
    event_id: DataTypes.INTEGER,
    driver_id: DataTypes.INTEGER,
    car_id: DataTypes.INTEGER,
    number_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EventDriver;
};