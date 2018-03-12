module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    when: DataTypes.STRING,
    attrs: DataTypes.JSONB
  }, {});
  event.associate = function(models) {
      event.belongsToMany(models.event_list, { through: 'event_list_memberships', as: 'list' })
  };
  return event;
};