const mongoose = require('mongoose');

const connection = mongoose.createConnection("mongodb+srv://ceylonedge:<PASSWORD>@authenticationtest.y4uc9af.mongodb.net/todo_db").on('open',()=>{
    console.log("mongoDB Connected");
}).on("error", ()=>{
    console.log("MongoDB Connection Failed");
});
module.exports = connection;