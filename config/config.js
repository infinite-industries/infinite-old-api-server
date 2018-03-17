require('dotenv').config();

module.exports = {
  "development": {
    //logging: console.log, # Uncomment this to output
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PW,
    "database": process.env.POSTGRES_HOST,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "xxx",
    "database": "infinite_api",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "xxx",
    "database": "infinite_api",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
