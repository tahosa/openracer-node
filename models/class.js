'use strict';
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('Class', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abbr: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 4]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Class;
};
