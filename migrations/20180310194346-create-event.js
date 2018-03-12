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
                attrs: {
                    type: Sequelize.JSONB
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