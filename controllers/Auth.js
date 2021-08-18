const Async = require('express-async-handler');
const User = require('../models/User');

function Person(name, email) {
	this.name = name;
	this.email = email;
}

const Auth = Async(async (req, res, next) => {
	const user = await User.findOne({ email: req.user.email });
	console.log(req.user.emails[0].value);
	if (user != null) next();
	else {
		new User(
			new Person(req.user.displayName, req.user.emails[0].value)
		).save((err) => {
			if (err) console.log(err);
			next();
		});
	}
});

module.exports = { Auth };
