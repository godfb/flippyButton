var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var userObject = {};


//var db = JSON.parse(data);

var boolCheck = false;

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/Client'));
app.use('/:username', express.static(__dirname + '/Client/user.html'));
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port ' + server.address().port);
});

app.post('/check', function(req, res) {
    res.send(userObject);
    res.end();
});

app.post('/post', function(req, res) {
    if (req.body) {
        userObject[req.body.user] = true;
    }
    res.end();
});

app.post('/state', function(req, res) {
    if (req.body) {
        console.log(req.body);
        userObject[req.body.user] = req.body.state;
    }
    res.end();
});

app.post('/delete', function(req, res) {
    if (req.body) {
        delete userObject[req.body.user];
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