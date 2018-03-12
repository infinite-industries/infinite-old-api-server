'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
          queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'),
            queryInterface.createTable('events', {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    type: Sequelize.DataTypes.UUID,
                    defaultValue: Sequelize.literal('uuid_generate_v4()'),
                },
                title: {
                    type: Sequelize.STRING
                },
                slug: {
                    type: Sequelize.STRING
                },
                time_start: {
                  allowNull: false,
                  type: Sequelize.DATE
                },
                time_end: {
                  allowNull: false,
                  type: Sequelize.DATE
                },
                when: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                website: Sequelize.STRING,
                image: Sequelize.STRING,
                social_image: Sequelize.STRING,
                venues: Sequelize.ARRAY(Sequelize.STRING), // array of strings for now
                admission_fee: Sequelize.STRING,
                address: Sequelize.STRING,
                organizers: Sequelize.ARRAY(Sequelize.STRING), // array of strings for now
                map_link: Sequelize.STRING,
                brief_description: Sequelize.STRING,
                description: Sequelize.TEXT,
                links: Sequelize.ARRAY(Sequelize.STRING),
                ticket_link: Sequelize.STRING,
                fb_event_link: Sequelize.STRING,
                eventbrite_link: Sequelize.STRING,
                bitly_link: Sequelize.STRING,
                tags: Sequelize.ARRAY(Sequelize.STRING),
                verified: {
                  type: Sequelize.BOOLEAN,
                  defaultValue: 'false'
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('now()')
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal('now()')
                }
            })
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};