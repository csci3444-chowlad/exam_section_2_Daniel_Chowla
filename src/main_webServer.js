
var express = require('express');
var myPowers = require('./common/util/math/myPowers.js')


var app = express();


app.set('views', './views'); 
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Your daily guide to square and cube roots' },
        name: 'Daniel',
        lastname: 'Chowla'
    };
    res.render('./pages/home.ejs', data2template);
});


app.get('/square', function(req, res) {
    var inpNumber = 2;
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: inpNumber,
        resultNumber: myPowers.toSquare(inpNumber)   
    };
    res.render('pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var data2template = {
        head: { title: 'Cube Page' },
        inpNumber: inpNumber,
        resultNumber: myPowers.toCube(inpNumber)
    };
    res.render('pages/cube.ejs', data2template);
});



app.get('/about', function(req, res) {
    
    res.status(200).render('pages/about.html');
});


app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8015, function() {
    console.log(
        'express app, Exam Section 2, started and listening at http://localhost:8015',
        server.address().address,
        server.address().port);
});
