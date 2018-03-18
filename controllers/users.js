const DefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');

module.exports = _.extend(DefaultController('user'), {
    allAndMergeWithEventLists: function (db, callback) {
        db.user.findAll({include: [
            { model: db.event_list, as: 'lists_my', through: { attributes: [] } },
            { model: db.event_list, as: 'lists_follow', through: { attributes: [] } },
          ]
        })
          .then((data) => {
          		console.log('GRR')
              callback(null, data)
          })
          .catch(err => callback(err))
    },
    findByIDAndMergeWithEventLists: function(db, id, callback) {
       db.user.findById(id, {include: [
               { model: db.event_list, as: 'lists_my', through: { attributes: [] } },
               { model: db.event_list, as: 'lists_follow', through: { attributes: [] } },
           ]
       })
         .then(data => callback(null, data))
         .catch(err => callback(err))
    },
    addList: function (db, user_id, event_list_id, callback) {
        db.user_list_ownership.create({ user_id, event_list_id })
          .then(() => callback())
          .catch(err => callback(err))
    }
});
