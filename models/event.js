module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    time_start: DataTypes.DATE,
    time_end: DataTypes.DATE,
    multi_day: DataTypes.BOOLEAN,
    additional_dates: DataTypes.JSONB,
    image: DataTypes.STRING,
    social_image: DataTypes.STRING,
    venue_id: DataTypes.UUIDV4,
    admission_fee: DataTypes.STRING,
    address: DataTypes.STRING,
    organizer_contact: DataTypes.STRING,
    // NOT IMPLEMENTED
    organizers:  {
        type: DataTypes.ARRAY(DataTypes.STRING),
        set(val) {
            if (!val)
                val = []

            this.setDataValue('organizers', val);
        }
    },
    map_link: DataTypes.STRING,
    brief_description: DataTypes.STRING,
    description: DataTypes.TEXT,
    links: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        set(val) {
            if (!val)
                val = []

            this.setDataValue('links', val);
        }
    },
    website_link: DataTypes.TEXT,
    ticket_link: DataTypes.STRING,
    fb_event_link: DataTypes.STRING,
    eventbrite_link: DataTypes.STRING,
    bitly_link: DataTypes.STRING,
    tags:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        set(val) {
            if (!val)
                val = []

            this.setDataValue('tags', val);
        }
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        set(val) {
            if (!val) // cast any undefined to false
                val = false

            this.setDataValue('verified', val);
        }
    }
  }, {});

  return event;
};