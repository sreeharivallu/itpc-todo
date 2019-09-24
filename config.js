
var env = process.env.NODE_ENV || 'dev'

var config = {
        dev : {
            connection_params: {
                host     : process.env.DB_HOST,
                user     : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                database : process.env.DB_DATABASE,
                timezone : process.env.DB_TIMEZONE,
            },
            secret_key : process.env.secret_key
        }
        
}

module.exports = config[env];