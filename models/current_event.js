const { getEventBase } = require('./eventBase')
module.exports = (sequelize, DataType) => {
  const current_event = sequelize.define('current_event', getEventBase(DataType), {});
  return current_event;
};