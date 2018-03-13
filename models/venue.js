'use strict';
module.exports = (sequelize, DataTypes) => {
  var venue = sequelize.define('venue', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    address: DataTypes.STRING,
    g_map_link: DataTypes.STRING
  }, {});
  venue.associate = function(models) {
    // associations can be defined here
  };
  return venue;
};