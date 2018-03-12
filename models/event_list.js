module.exports = (sequelize, DataTypes) => {
  const event_list = sequelize.define('event_list', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    list_name: DataTypes.STRING,
    description: DataTypes.STRING,
    attrs: DataTypes.JSONB
  }, {})

  event_list.belongsToMany(sequelize.event, {
    through: sequelize.event_list_membership,
    foreignKey: 'event_list_id',
    otherKey: 'event_id'
  }) //  as: 'event'
  /*event_list.associate = function(models) {
    console.log('!!! make association')
    event_list.belongsToMany(models.event, { through: 'event_list_memberships', as: 'event' })
  }*/

  return event_list
};