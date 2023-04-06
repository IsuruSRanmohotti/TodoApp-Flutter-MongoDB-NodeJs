const TodoModel = require('../models/todo_models');

class ToDoServices{
    static async createTodo(userID,title,description){
        const createToDO = new TodoModel({userID,title,description});
        return await createToDO.save();
    }

    static async getTodoData(userID){
        const todoData = await TodoModel.find({userID});
        return todoData;
    }

    static async deleteTodo(id){
        const deleted = await TodoModel.findOneAndDelete({_id:id});
        return deleted;
    }

    

}

module.exports = ToDoServices;