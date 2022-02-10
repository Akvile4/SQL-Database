const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Film = sequelize.define('Series', {
    name: {
        type : DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypes.STRING,
        allowNull : false
    },
    year: {
        type : DataTypes.INTEGER,
    },
    season: {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
})

module.exports = Film;