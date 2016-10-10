var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(function(res, req, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST');
	res.header('Access-Control-Allow-Headers', 'X-Request-Width, Content-Type');
	next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/validate', function(req, res, next){

	if ( isValidEmail(req.body.email) ) {
		res.json({status: 'Success: Email is valid!'});
	} else {
		res.json({status: 'Error: Email is not valid!'});
	}

	next();

	function isValidEmail( email ) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

});

app.post('/login', function(req, res, next) {
	if (req.body.login === 'admin' && req.body.pass === 'admin12345') {
		res.json({status: 'You have logged in as administrator'});
	} else if (req.body.login === 'user' && req.body.pass === 'user12345') {
		res.json({status: 'Hello user'});
	} else {
		res.json({status: 'Invalid login or email'});
	}
	next();
});

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/auth', function(req, res, next){
	res.sendFile(path.join(__dirname + '/auth.html'));
});

app.listen( 3000, function(){
	console.log('Server running on port 3000');
	console.log('Type http://localhost:3000 in your web borwser');
});


module.exports = app;
