var config = require('./config');
var https = require('https');

require('cylon').robot({
    work: function (my) {
        //send messages every 4 seconds...
        every((4).second(), function () {
            postData();
        });
    }
}).start();

function postData() {

    var user = {
        username: 'jasonrwalters',
        email: 'jwalters@microsoft.com',
        firstName: 'Jason',
        lastName: 'Walters'
    };

    var userString = JSON.stringify(user);

    var headers = {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Content-Length': userString.length,
        'X-ZUMO-APPLICATION': config.appkey
    };

    var options = {
        host: config.mobileservices + 'hackdev.azure-mobile.net',
        port: 443,
        path: '/tables/' + config.table,
        method: 'POST',
        headers: headers
    };

    // Setup the request.  The options parameter is
    // the object we defined above.
    var req = https.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
        });
    });

    req.on('error', function (e) {
        // TODO: handle error.
    });

    req.write(userString);
    req.end();
}