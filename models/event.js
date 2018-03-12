module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    when: DataTypes.STRING,
    website: DataTypes.STRING,
    image: DataTypes.STRING,
    social_image: DataTypes.STRING,
    venues: DataTypes.ARRAY(DataTypes.STRING), // array of strings for now
    admission_fee: DataTypes.STRING,
    address: DataTypes.STRING,
    organizers: DataTypes.ARRAY(DataTypes.STRING), // array of strings for now
    map_link: DataTypes.STRING,
    brief_description: DataTypes.STRING,
    description: DataTypes.TEXT,
    links: DataTypes.ARRAY(DataTypes.STRING),
    ticket_link: DataTypes.STRING,
    fb_event_link: DataTypes.STRING,
    eventbrite_link: DataTypes.STRING,
    bitly_link: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    verified: DataTypes.BOOLEAN
  }, {});
  event.associate = function(models) {
      event.belongsToMany(models.event_list, { through: 'event_list_memberships', as: 'list' })
  };
  return event;
};