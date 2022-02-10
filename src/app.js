const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { addFilm, list } = require('./movies/movieMethods');
const argv = yargs(hideBin(process.argv)).argv;

const app  = async () => {
    if (argv.add) {
        const filmbObj = {
            name: argv.title,
            actor: argv.actor
        }
        await addFilm(filmbObj)
    }
    else if (argv.list) {
        await list()
    }
    else {
        console.log('wrong command')
    }
}

app()