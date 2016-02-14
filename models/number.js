'use strict';
module.exports = function(sequelize, DataTypes) {
  var Number = sequelize.define('Number', {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Number;
};
