var express = require('express'),
	router = express.Router(),
	controller = require('../controllers/authController')(),
	passport = require('passport');

router.route('/signup')
.post(controller.signupPost);

router.route('/login')
.post(passport.authenticate('local', {
		failureRedirect: '/'
	}), controller.loginPost);

router.route('/profile')
.all(controller.profileAll)
.get(controller.profileGet);

module.exports = router;