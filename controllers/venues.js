const getDefaultController = require('./helpers/controllerGenerator');
const controller = getDefaultController('venue')
module.exports = {
  ...controller,
  ensureExistsByName: (db, venue, callback) => {
    db.venue.find({ name: venue.name }).then((foundVenue) => {
      if (foundVenue) {
        callback(null, foundVenue);
      } else {
        controller.create(db, venue, callback)
      }
    }).catch(err => callback(err))
  }
};
