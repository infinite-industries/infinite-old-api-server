const DefaultController = require('./helpers/controllerGenerator');
const _ = require('lodash');

module.exports = _.extend(DefaultController('user'), {
    allAndMergeWithEventLists: function (db, callback) {
    	console.log('!!! much here')
        db.user.findAll({include: {model: db.event_list}})
          .then((data) => {
          		console.log('GRR')
              callback(null, data)
          })
          .catch(err => callback(err))
    },
    /*findByIDAndMergeWithEventLists: function(id, callback) {
        DefaultController.findAndMerge(UserModel, EventListModel, ['lists_my', "lists_follow"], { id },
            (err, docs) => callback(err, docs ? docs[0] : null));
    },*/
    addList: function (id, listID, callback) {
        console.log('Hi I am a conotrller -', listID);
        //UserModel.updateOne({ id }, { $push: { lists_my: listID } }, callback);
    }
});
