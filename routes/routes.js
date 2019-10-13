var express = require('express')
var router = express.Router();
var expressJwt = require('express-jwt');
var guard = require('express-jwt-permissions')();

const  config = require('../config');
const schemas = require('../helpers/input_schema');
const validator = require('../helpers/validator');

const user = require('./').user;
const todo = require('./').todo;

// define the home page route
router.get('/', function (req, res) {
  res.send('TODO HOME')
})

// User APIs
router.post('/login', user.authenticate);

// TODO APIs
router.post('/create', expressJwt({secret:config.secret_key}), validator(schemas.CREATE, 'body'), todo.addTodoForUser);
router.get('/read', expressJwt({secret:config.secret_key}), todo.getTodoForUser);
router.put('/update/:todo_id', expressJwt({secret:config.secret_key}), todo.updateTodoForUser);
router.delete('/delete/:todo_id', expressJwt({secret:config.secret_key}), todo.deleteTodoForUser);

module.exports = router