const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { addFilm, list, update, deleteOne, deleteAll } = require('./movies/movieMethods');
const argv = yargs(hideBin(process.argv)).argv;

const app  = async () => {
    if (argv.add) {
        const filmbObj = {
            name: argv.title,
            actor: argv.actor,
            year: argv.year,
            season: argv.season
        }
        await addFilm(filmbObj)
    }
    else if (argv.list) {
        await list()
    }
    else if (argv.update) {
        await update()
    }
    else if (argv.delete) {
        await deleteOne()
    }
    else if (argv.destroyAll) {
        await deleteAll()
    }
    else {
        console.log('wrong command')
    }
}

app()