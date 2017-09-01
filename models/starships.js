'use strict';
module.exports = function (sequelize, DataTypes) {
  var starships = sequelize.define('starships', {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    cost_in_credits: DataTypes.STRING,
    length: DataTypes.STRING,
    max_atmosphering_speed: DataTypes.STRING,
    crew: DataTypes.STRING,
    passengers: DataTypes.STRING,
    cargo_capacity: DataTypes.STRING,
    consumables: DataTypes.STRING,
    hyperdrive_rating: DataTypes.STRING,
    MGLT: DataTypes.STRING,
    starship_class: DataTypes.STRING,
    created: DataTypes.DATE,
    edited: DataTypes.DATE,
    url: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });

  starships.sync({ force: true });

  return starships;
};