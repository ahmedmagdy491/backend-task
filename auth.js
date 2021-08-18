const StrategyParent = require('./StrategyParent');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const strategy = new StrategyParent();
strategy.newStrategy(
	GoogleStrategy,
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	process.env.GOOGLE_REDIRECT_URL
);

strategy.newStrategy(
	FacebookStrategy,
	process.env.FACEBOOK_APP_ID,
	process.env.FACEBOOK_APP_SECRET,
	process.env.FACEBOOK_REDIRECT_URL
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	return done(null, user);
});
