const DevKeyModel = require("../models/devKeys");

module.exports = {

	findById: function(id, callback){
		//TODO check on FindOne for this case
		DevKeyModel.findOne({ id }, callback)
	}
}
