const mongoose = require('mongoose');
const database_link = process.env.DATABASE_LINK;
const database_connector = () =>
	mongoose.connect(
		database_link,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		},
		(err) => {
			if (err) throw new Error(err);
			console.log(`you are connected to database`);
		}
	);
module.exports = database_connector;
