'use strict';
module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memberNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emergencyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emergencyPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    novice: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Driver.hasOne(models.Number, {as: 'primaryNumber'});
        Driver.belongsToMany(models.Car, {through: 'DriverCars'});
      }
    }
  });
  return Driver;
};
