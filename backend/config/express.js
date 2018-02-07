var express = require('express');
var auth = require('./authenticaion')
bodyParser = require('body-parser');


    module.exports = function () {
       var app = express();
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        // app.use(auth)
        require('../app/routes')(app);
        return app;

    }