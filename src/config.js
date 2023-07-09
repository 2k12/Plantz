const {config} = require('dotenv')
config()

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const TOKEN_EXPIRATION_TIME = process.env.TOKEN_EXPIRATION_TIME;


module.exports = {
    TOKEN_EXPIRATION_TIME,
    TOKEN_SECRET,
    db:{
        user: process.env.DB_USER,
        passsword: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}