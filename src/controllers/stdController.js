var stdController = function() {
	var check = function(req, res) {
		res.send('server running');
	}

	return {
		check: check
	}
}

module.exports = stdController;