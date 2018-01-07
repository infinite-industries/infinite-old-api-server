// User (devs curators) management here
const UsersController = require("../controllers/users");
const passport = require('passport');
const constants = {
	db_error: "db_fail",
	success_status: "success"
};
const { getDefaultRouter } = require("./helpers/routeHelpers");
const router = getDefaultRouter("users", "user", UsersController, {}, {
	allMethod: UsersController.allAndMergeWithEventLists,
	byIDMethod: UsersController.findByIDAndMergeWithEventLists
});

router.put(
	"/addList/:userID/:listID",
	passport.authenticate('localapikey', { session: false }),
	function(req, res) {
		UsersController.addList(req.params.userID, req.params.listID, function(err) {
			if (err) {
				console.warn("error adding event to list: " + err);
				res.status(500).json({ "status": constants.db_error });
			} else {
				res.status(200).json({ status: constants.success_status });
			}
		});
	});

module.exports = router;
