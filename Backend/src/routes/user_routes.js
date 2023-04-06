const route =require('express').Router();
const UserController = require('../controller/user_controller');
route.post("/registration",UserController.register);
route.post("/login",UserController.login);
module.exports = route;