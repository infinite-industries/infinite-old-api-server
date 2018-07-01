const async = require('async')
const fs = require('fs')
const fileLocation = __dirname + '/data/mock_event_lists.json'

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
                            console.log('!!! try got get it: ' + contents.toString())
                            json = JSON.parse(contents.toString())
                            console.log('!!! got it');
                        } catch (ex) {
                            return _nextTask(err)
                        }

                        _nextTask(null, json)
                    })
                },
                (event_lists, _nextTask) => {
                  console.log('!!! map it')
                  const listsToInsert = event_lists.map(l => {
                    return { id: l.id, list_name: l.list_name, description: l.description }
                  })
                  const membership = []
                  console.log('!!! push it')
                  event_lists.forEach(l => {
                    if (l.events) {
                      console.log('!!! l.events:' + l.events)
                      l.events.forEach(e => {
                        membership.push({event_list_id: l.id, event_id: e})
                      })
                    } else {
                      console.log('!!! not')
                    }
                  })

                  _nextTask(null, listsToInsert, membership)
                },
                (listsToInsert, membership, _nextTask) => {
                    console.log('!!! bulk insert: ' + JSON.stringify(listsToInsert, null, 4))
                    queryInterface.bulkInsert('event_lists', listsToInsert, {})
                      .then(() => _nextTask(null, membership))
                      .catch(err => _nextTask(`error inserting event_lists: "${err}"`))
                },
                (membership, _nextTask) => {
                    if (membership.length === 0)
                      return _nextTask()
                    console.log('!!! another bulk insert: ' + JSON.stringify(membership))
                    queryInterface.bulkInsert('event_list_memberships', membership, {})
                      .then(() => _nextTask())
                      .catch(err => _nextTask(`error inserting event_list_memberships: "${err}"`))
                }
            ], (err) => {
              if (err) {
                console.log('!!! rejected: ' + err)
                return reject(err)
              }

              console.log('!!! resolve it')
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
};
