var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(logger('dev'));
app.use(session({
    secret: 'amin',
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

app.listen('8089', function() {
    console.log("App running on post 8089")
})