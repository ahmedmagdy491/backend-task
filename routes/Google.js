const router = require('express').Router();
const Passport = require('./PassportParent');

const passport = new Passport(router);

let strategyName = 'google';
let route = '/auth/google';
let callbackRoute = '/google/callback';

passport.passport_config(route, strategyName, ['email', 'profile']);
passport.passport_result_check(callbackRoute, strategyName, {
	success: '/protected',
	failed: '/auth/failure',
});

module.exports = router;
