module.exports = function(app) {
    var builds = require('../controller/controller');

    app.route('/builds')
        .get(builds.list_all_builds);
};