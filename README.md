# itpc-todo
Todo app for itpc

#How to Run
npm install
npm run start (or) node app.js

APIs

1. Login:

. Method: POST

. Endpoint: /todo/login

. Input

{"email": "sree.bobby4u@gmail.com"}

Success Response:
Status 200 {
token: "JWToken" }

Possible failure Responses
Status 401
{
    "message": "user doesn't exist in our database"
}

2. Create TODO:

.Method: POST
.Endpoint: todo/create
.Input
  {todo_name : "Attend meeting with Microsoft CEO"}
Authorization with JWT token is mandatory.

3. get TODO:
.Method: GET
.Endpoint: todo/read

Success Response:
Status 200 {
  [
    {
        "todo_id": 4,
        "user_id": 63,
        "todo_name": "5G meeting"
    }
]
}

4. update Todo
   .Method: PUT
   .Endpoint: todo/update/:todo_id
   .Input
      {todo_name: "Meeting with Google CEO"}


5. delete Todo
     .Method: DELETE
     .endpoint: todo/delete/:todo_id
     
     
Heroku deployment
https://my-mail-center.herokuapp.com/email

Heroku deployment. 

Test mail Ids:

sree.bobby4u@gmail.com
bhavesh.vallu@gmail.com

#TODOs
Due to time constraint, test cases are written. Test cases inlcuding negative test cases has to be written. 

Just written config for one environment. Improvements has to be done deploy based on environment like Dev, Test and Prod.
