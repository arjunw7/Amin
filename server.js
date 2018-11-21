var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "13bcb0062",
    database: "amin"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.use(logger('dev'));
app.use(session({
    secret: 'react-boilerplate',
    saveUninitialized: true,
    resave: true
}));


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());


app.use('/public', express.static(path.join(__dirname, 'public')));

//frontend routes
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
})

app.listen('5000', function() {
    console.log("App running on post 5000")
})