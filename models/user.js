'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    identifier: DataTypes.STRING,
    settings: DataTypes.JSONB,
    permissions_post_as_venues: DataTypes.JSONB,
    permissions_edit_lists: DataTypes.JSONB
  }, {});

  return user;
};