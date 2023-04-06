const express = require("express");
const bodyParser = require('body-parser');
const userRouter = require('../src/routes/user_routes');
const todoRouter = require('./routes/todo_routes');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',userRouter);
app.use('/',todoRouter);

module.exports = app;