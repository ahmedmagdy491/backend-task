const express = require('express');
require('dotenv/config');
const passport = require('passport');
const session = require('express-session');
require('./auth');
const { readdirSync } = require('fs');

const app = express();

app.use(session({ secret: process.env.secret }));
app.use(passport.initialize());
app.use(passport.session());

readdirSync('./routes').map((route) => app.use(require('./routes/' + route)));

const database_connector = require('./config/database');
database_connector();

let port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`server is running on localhost:${port}`);
});
