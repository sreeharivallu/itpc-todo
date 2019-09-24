var mysql = require('promise-mysql');
var config = require('../config');
var connection = null;

mysql.createConnection(config.connection_params)
.then(conn => {
    connection = conn;
    console.log("Created db connection successfully");
})
.catch(err => {
    console.log("Failed to create db connection", err)
});

/**********************************************
 **********************************************
  User db queries
 **********************************************
 *********************************************/

async function getUserDetails(email){    
    console.log('email is', email);
    let userQuery = `SELECT id, first_name, last_name, email, phone, DOB, gender, role FROM user
                         WHERE email='${email}'`; 
    console.log('user Query is', userQuery);                        
    return await connection.query(userQuery);    
}

/***************************************************
 ***************************************************
 todo db queries
 ***************************************************
 **************************************************/

async function getAlltodoForUser(user_id){

    let query = `SELECT c.todo_id, c.user_id, c.todo_name FROM todo c 
                WHERE user_id=${user_id}`;
    return await connection.query(query);
}


async function updatetodo(todo_id, todo_name){
    let query = `UPDATE todo SET todo_name = '${todo_name}' 
                                WHERE todo_id = ${todo_id}`
    return await connection.query(query);
}

async function inserttodoForUser(user_id, todo_name){
   
    let query = `INSERT INTO todo (user_id, todo_name) VALUES (${user_id}, "${todo_name}")`;
    console.log('query is', query);
    return await connection.query(query);
}

async function deletetodo(todo_id){
    let query = `DELETE FROM todo WHERE todo_id = ${todo_id}`;
    return await connection.query(query);
}


module.exports = {                            
    getUserDetails : getUserDetails,
    getAlltodoForUser : getAlltodoForUser,
    inserttodoForUser : inserttodoForUser,
    updatetodo : updatetodo,
    deletetodo : deletetodo
};

