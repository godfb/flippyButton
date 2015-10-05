var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


//var db = JSON.parse(data);

var boolCheck = false;

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/Client'));
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port ' + server.address().port);
});

app.get('/check', function(req, res) {
    if (boolCheck){
        res.send({data: 1});
    }
    else{
        res.send({data: 0});
    }
    res.end();
});

app.get('/succeed', function(req, res) {
    boolCheck = !boolCheck;
    if (boolCheck){
        res.send({data: 1});
    }
    else{
        res.send({data: 0});
    }
    res.end();
});