'use strict';
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('date')).format('YYYY-MM-DD');
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Event.belongsToMany(models.Driver, {through: 'EventDrivers'});
      }
    }
  });
  return Event;
};
