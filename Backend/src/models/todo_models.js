const db = require('../config/db');
const mongoose =require('mongoose');
const UserModel = require("../models/user_model");
const {Schema} = mongoose;

const todoSchema = new Schema({
    userID:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

//"Todo is collection name"
const todoModel = db.model('Todo',todoSchema);

module.exports = todoModel;