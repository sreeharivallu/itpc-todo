var db = require('./db');

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
    return await db.query(userQuery);    
}

module.exports = {getUserDetails};