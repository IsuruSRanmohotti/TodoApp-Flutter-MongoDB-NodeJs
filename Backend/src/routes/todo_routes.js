const route =require('express').Router();
const ToDoController = require("../controller/todo_controller");
route.post('/storeTodo',ToDoController.createToDO);

route.post('/getTodos',ToDoController.getUserTodo);
route.post('/deleteTodo',ToDoController.deleteTodo)

module.exports = route;