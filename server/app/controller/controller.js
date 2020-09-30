var Build = require("../model/model")

exports.list_all_builds = function (req, res) {
    Build.getAllBuilds(function(err, build) {
        if (err) {
            res.send(err);
            console.log('res', build);
        }
        res.send(build);
    });
};