var passport = require('passport'),
	local = require('passport-local'),
	db = require('../../db/connect');

module.exports = function() {
	passport.use(new local({
		usernameField: 'username',
		passwordField: 'password'
	},
	function(username, password, done) {
		db('users').select().where({
			name: username,
			password: password
		})
		.then(function(data) {
			if(data.length) {
				done(null, data);
			} else {
				done(null, false, {
					message: 'Bad password'
				});
			}
		});
	}));
};