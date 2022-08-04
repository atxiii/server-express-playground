const { dBug } = require('../helper')
const  allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Credentials', true)	
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');

	    next();
}

module.exports = allowCrossDomain
