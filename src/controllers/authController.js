var db = require('../../vendor/db/connect');

var authController = function() {
	var signupPost = function(req, res) {
		db('users').insert({
			name: req.body.username,
			password: req.body.password
		})
		.then(function(data) {
			req.login(data, function() {
				res.redirect('/auth/profile');
			});
		});
	};

	var loginPost = function(req, res) {
		res.redirect('/auth/profile');
	};

	var profileAll = function(req, res, next) {
		if(!req.user) {
			res.redirect('/');
		}

		next();
	};

	var profileGet = function(req, res) {
		res.send('user profile');
	}

	return {
		signupPost: signupPost,
		loginPost: loginPost,
		profileAll: profileAll,
		profileGet: profileGet
	}
}

module.exports = authController;