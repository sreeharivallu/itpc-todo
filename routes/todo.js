const todoModel = require('../model/todo');

var addTodoForUser = (req,res,next)=> {
    let user_id = req.user.user_id;
    let todo = req.body.todo;
    let todo_name = req.body.todo_name;
    console.log('req body is', req.body);
    console.log('req user is', req.user);
    todoModel.inserttodoForUser(user_id, todo_name, todo)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send('Failed to add check list for user');
    })
}

var getTodoForUser = (req,res,next)=> {
    let user_id = req.user.user_id;

    todoModel.getAlltodoForUser(user_id)
    .then(todo => {
        console.log('todos', todo);
        res.status(200).json(todo);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send('Failed to get check list for user');
    })
}


var updateTodoForUser = (req,res,next)=> {
    let todo_id = req.params.todo_id;
    let todo_name = req.body.todo_name;

    todoModel.updatetodo(todo_id, todo_name)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send('Failed to update check list');
    })
}


var deleteTodoForUser = (req, res, next) => {
    let user_id = req.user.user_id;
    let todo_id = req.params.todo_id;

    todoModel.deletetodo(todo_id)
    .then(status => {
        console.log('status', status);
        res.status(200).json(status);
    })
    .catch(err => {
        console.log('err: ', err);
        res.status(500).send('Failed to get check list for user');
    })
}


module.exports = {
    addTodoForUser,
    getTodoForUser,    
    updateTodoForUser,
    deleteTodoForUser  
}