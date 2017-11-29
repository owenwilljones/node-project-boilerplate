var express = require('express'),
	app = express(),
	parser = require('body-parser'),
	cookie = require('cookie-parser'),
	session = require('express-session');

app.use(express.static('public'));

app.use(parser.json());
app.use(parser.urlencoded({
	extended: true
}));

app.use(cookie());
app.use(session({
	secret: 'super-secret',
	resave: true,
	saveUninitialized: true
}));

require('./vendor/session/passport')(app);

require('./vendor/router/route-manager')(app);

app.listen(3000, function(err) {
	console.log('server running');
});