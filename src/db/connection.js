const {Sequelize} = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URI);

    // to check if connected to the database

// sequelize.authenticate().then(()=>{
//     console.log('connected to db');
// }).catch((err) => {
//     console.log(err)
// })

        //  OR

// let connection = async() => {
//     try {
//         await sequelize.authenticate()
//     } catch (error) {
//         console.log(error)
//     }
// }

// connection()


module.exports = sequelize