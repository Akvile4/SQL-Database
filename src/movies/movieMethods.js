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

	// shows everything in the database
exports.list = async () => {
	try {
		const listOfMovies = await Film.findAll();
		console.log(listOfMovies);
	} catch (error) {
		console.log(error);
	}
};

	// find everything with specific data
exports.find = async () => {
	try {
		if (argv.title) {
			const findThis = await Film.findAll({
				where: {
					name: argv.title
				}
			})
			console.log(findThis);
		}
		else if (argv.actor) {
			const findThis = await Film.findAll({
				where: {
					actor: argv.actor
				}
			})
			console.log(findThis);
		}
		else if (argv.year) {
			const findThis = await Film.findAll({
				where: {
					year: argv.year
				}
			})
			console.log(findThis);
		}
		else if (argv.season) {
			const findThis = await Film.findAll({
				where: {
					season: argv.season
				}
			})
			console.log(findThis);
		}
		else {
			console.log('Nothing to find!')
		}
	} catch (error) {
		console.log(error)
	}
}
	// updates all with certain data 
exports.update = async () => {
	try {
		if (argv.newTitle) {
			await Film.update( {name: argv.newTitle}, {
					
					where: {
						name: argv.title,
					}
			});
		}
		else if (argv.newActor) {
			await Film.update( {actor: argv.newActor}, {
				where: {
					actor: argv.actor
				}
			})
		}
		else if (argv.newYear) {
			await Film.update( {year: argv.newYear}, {
				where: {
					year: argv.year
				}
			})
		}
		else if (argv.newSeason) {
			await Film.update( {season: argv.newSeason}, {
				where: {
					season: argv.season
				}
			})
		}
		else {
			console.log("update error");
		}
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

	// deletes everything from the database
exports.deleteAll = async () => {
	try {
		await Film.destroy(
			{
				truncate : true
			}
		)
		console.log('everything is destroyed!!!')
	} catch (error) {
		console.log(error)
	}
}