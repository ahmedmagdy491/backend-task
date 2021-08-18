const router = require('express').Router();

const Passport = require('./PassportParent');

const passport = new Passport(router);

let strategyName = 'facebook';
let route = '/auth/facebook';
let callbackRoute = '/facebook/callback';

passport.passport_config(route, strategyName, ['email']);
passport.passport_result_check(callbackRoute, strategyName, {
	success: '/protected',
	failed: '/auth/failure',
});

module.exports = router;
