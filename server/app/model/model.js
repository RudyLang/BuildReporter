var mysql = require('./db.js');

var Build = function(build) {
    this.build_number = build.build_number;
}

Build.getAllBuilds = function (result) {
    mysql.query("SELECT * FROM unity", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            console.log('builds: ', res);
            result(null, res);
        }
    });
};

module.exports = Build;