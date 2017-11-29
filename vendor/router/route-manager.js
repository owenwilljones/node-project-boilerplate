var fs = require('fs');

var routeManager = function(app) {
	fs.readdir('./src/routes', function(err, files) {
		if(err) {
			console.error('Failed to read routes directory.', err);
			process.exit(1);
		}

		files.forEach(function(file, n) {
			var routeName = file.substring(0, file.indexOf('.js')),
				route = require('../../src/routes/' + routeName);

			if(routeName == 'std') {
				app.use('/', route);
			} else {
				app.use('/' + routeName, route);
			}
		});
	});
};

module.exports = routeManager;