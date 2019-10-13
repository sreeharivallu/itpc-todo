var connection = require('./db');

/***************************************************
 ***************************************************
 todo db queries
 ***************************************************
 **************************************************/

module.exports = {
    getAlltodoForUser : async function(user_id){

        let query = `SELECT c.todo_id, c.user_id, c.todo_name FROM todo c 
                    WHERE user_id=${user_id}`;
        return await connection.query(query);
    },
        
    updatetodo: async function(todo_id, todo_name){
        let query = `UPDATE todo SET todo_name = '${todo_name}' 
                                    WHERE todo_id = ${todo_id}`
        return await connection.query(query);
    },
    
    inserttodoForUser: async function(user_id, todo_name){
       
        let query = `INSERT INTO todo (user_id, todo_name) VALUES (${user_id}, "${todo_name}")`;
        console.log('query is', query);
        return await connection.query(query);
    },
    
    deletetodo: async function(todo_id){
        let query = `DELETE FROM todo WHERE todo_id = ${todo_id}`;
        return await connection.query(query);
    }
}
