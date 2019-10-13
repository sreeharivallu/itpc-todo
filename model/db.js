var mysql = require('mysql');
var util = require('util');
var config = require('../config');

try{
    var connection = mysql.createPool(config.connection_params);
    connection.query = util.promisify(connection.query)
    
    //console.log("Created connection details are", connection);
    //pool.query() is a shortcut for pool.getConnection() + connection.query() + connection.release().
    //https://medium.com/@mhagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4
    module.exports = connection;

}catch(err){
    console.log("Failed to create db connection", err);
}


