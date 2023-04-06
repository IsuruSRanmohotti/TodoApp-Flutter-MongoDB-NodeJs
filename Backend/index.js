const app =require('./src/app');
const db = require('./src/config/db');
const userModel = require("./src/models/user_model");
const todoModel = require("./src/models/todo_models");
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
});


app.listen(port,()=>{
    console.log(`Server listen on ${port}`);
});