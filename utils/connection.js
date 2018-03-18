const Sequelize = require('sequelize')
require('dotenv').config()

module.exports = function getConnection() {
    const sequelize = new Sequelize('infinite_api', process.env.POSTGRES_USER, process.env.POSTGRES_PW, {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

    sequelize.event = sequelize.import(__dirname + '/../models/event');
    sequelize.event_list_membership = sequelize.import(__dirname + '/../models/event_list_membership')
    sequelize.event_list = sequelize.import(__dirname + '/../models/event_list')
    sequelize.dev_key = sequelize.import(__dirname + '/../models/dev_key')
    sequelize.venue = sequelize.import(__dirname + '/../models/venue')
    sequelize.user = sequelize.import(__dirname + '/../models/user')
    sequelize.user_list_ownership = sequelize.import(__dirname + '/../models/user_list_ownership')
    sequelize.user_list_following = sequelize.import(__dirname + '/../models/user_list_following')

    return sequelize
};
