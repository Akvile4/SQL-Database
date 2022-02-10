const Film = require("./moviesModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
	try {
			// create a database if it doesn't exist
		await Film.sync();
			// create an entry
		await Film.create(filmObj);
	} catch (error) {
		console.log(error);
	}
};

exports.list = async () => {
	try {
		const listOfMovies = await Film.findAll();
		console.log(listOfMovies);
	} catch (error) {
		console.log(error);
	}
};

exports.update = async () => {
	try {
		await Film.update( {name: argv.newTitle}, {
				
				where: {
					name: argv.title,
				},
		});
		console.log("updated");
	} catch (error) {
		console.log(error);
	}
};

exports.deleteOne = async () => {
	try {
		await Film.destroy( {
			where: {
				name: argv.title
			}
		})
		console.log('destroyed');
	} catch (error) {
		console.log(error)
	}
}