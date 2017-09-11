const express = require("express");
const constants = {
    db_error: 'db_fail',
    success_status: 'success'
};

module.exports = {
    constants,
	getDefaultRouter
};

function getDefaultRouter(router_name, router_name_singular, controller) {
    const debug = require('debug')('router:' + router_name);
    const identifier = router_name_singular + 'ID';
    router = express.Router();

    debug('establishing router "/" for router "%s"', router_name);
    router.get("/", function(req, res) {
        console.log("handling request for all " + router_name);
        controller.all(function(err, data) {
            if (err) {
                console.warn("error handling request for all %s: %s: ", router_name, err);
                res.status(500).json({ status: constants.db_error });
            } else {
                debug('found all requested ' + router_name);
                const resp = { status: constants.success_status };
                resp[router_name] = data;
                res.status(200).json(resp);
            }
        });
    });

    debug('establish router /:%s for router %s', identifier, router_name);
    router.get("/:" + identifier,
        function(req, res) {
            console.log("handling request for %s by id: %s", router_name, req.params[identifier]);
            controller.findById(req.params[identifier], function(err, data) {
                if(err) {
                    console.warn("error handling request for artist: " + err);
                    res.status(500).json({ "status": constants.db_error });
                }
                else if (data===null) {
                    debug('could not find the requested %s:%s', router_name_singular, req.params[identifier]);
                    res.status(404).json({"status":"no_such_id"});
                }
                else {
                    const resp = { status: constants.success_status };
                    resp[router_name_singular] = data;
                    res.status(200).json(resp);
                }
            })
        }
    );

    return router;
}
