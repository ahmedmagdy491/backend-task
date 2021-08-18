const passport = require('passport');

function Passport(router) {
	this.passport_config = function (route, strategyName, scope) {
		router.get(
			route.toString(),
			passport.authenticate(strategyName.toString(), {
				scope: scope,
			})
		);
	};
	this.passport_result_check = function (
		route,
		strategyName,
		{ success, failed }
	) {
		router.get(
			route,
			passport.authenticate(strategyName, {
				successRedirect: success,
				failureRedirect: failed,
			})
		);
	};
}

module.exports = Passport;
