var conf = require('../../config'),
	knex = require('knex')({
		client: 'mysql',
		  connection: {
		    host : conf.db.host,
		    user : conf.db.user,
		    password : conf.db.password,
		    database : conf.db.database
		  }
	});

module.exports = knex;