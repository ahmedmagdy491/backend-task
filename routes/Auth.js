const { Auth } = require('../controllers/Auth');

const router = require('express').Router();

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(401);
}

router.get('/', (req, res) => {
	res.send(
		'<button style="padding:20px; background: red; border: none; color: white; font-size: 1.8rem "><a style="color:white; text-decoration:none" href="/auth/google">Authentication with google</a></button> \n <br /> <button style="padding:20px; background: blue; border: none; color: white; font-size: 1.6rem"><a style="color:white; text-decoration:none; margin: auto"<a href="/auth/facebook">Authentication with facebook</a></button>'
	);
});

router.get('/protected', isLoggedIn, Auth, (req, res) => {
	res.send(`Hello ${req.user.displayName} <a href="/logout">logout</a>`);
});

router.get('/auth/failure', (req, res) => {
	res.send('something went wrong ...');
});

router.get('/logout', (req, res) => {
	req.logout();
	req.session.destroy();
	res.send('Goodbye, <a href="/">Home</a>');
});

module.exports = router;
