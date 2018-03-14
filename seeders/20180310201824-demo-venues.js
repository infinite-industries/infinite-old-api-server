const async = require('async')
const fs = require('fs')

const fileLocation = `${__dirname}/data/mock_venues.json`

module.exports = {
    up: (queryInterface, Sequelize) => {
        return new Promise((resolve, reject) => {
          async.waterfall([
            _nextTask => {
                fs.readFile(fileLocation, (err, contents) => {
                    if (err) {
                        return _nextTask(err)
                    }

                    let json = null
                    try {
                        json = JSON.parse(contents.toString())
                    } catch (ex) {
                        return _nextTask(err)
                    }

                    _nextTask(null, json)
                })
            },
            (venues, _nextTask) => {
                queryInterface.bulkInsert('venues', venues, {})
                  .then(() => _nextTask())
                  .catch(err => _nextTask(err))
            }
          ], err => {
              if (err)
                return reject(err)

              resolve()
          })
        })
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
}
