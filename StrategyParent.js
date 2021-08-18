const passport = require('passport');

function Strategy() {
	this.newStrategy = function (
		Strategy,
		clientID,
		clientSecret,
		callbackURL
	) {
		passport.use(
			new Strategy(
				{
					clientID: clientID,
					clientSecret: clientSecret,
					callbackURL: callbackURL,
					profileFields: ['id', 'displayName', 'email'],
				},
				function (accessToken, refreshToken, profile, done) {
					return done(null, profile);
				}
			)
		);
	};
}

module.exports = Strategy;
