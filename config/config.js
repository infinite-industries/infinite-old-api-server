require('dotenv').config();

module.exports = {
  "development": {
    //logging: console.log, # Uncomment this to output
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PW,
    "database": 'infinite_api',
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PW,
    "database": 'infinite_api',
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PW,
    "database": 'infinite_api',
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres"
  }
}
