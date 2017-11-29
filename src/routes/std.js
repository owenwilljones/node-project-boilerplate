var express = require('express'),
	router = express.Router(),
	controller = require('../controllers/stdController')();

router.route('/')
.get(controller.check);

module.exports = router;