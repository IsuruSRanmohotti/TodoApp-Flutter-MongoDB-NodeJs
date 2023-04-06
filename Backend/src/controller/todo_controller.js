const ToDOServices = require("../services/todo_service");

exports.createToDO = async (req,res,next)=>{
    try {
        const {userID,title,description} = req.body;
        let todo = await ToDOServices.createTodo(userID,title,description);

        res.json({status:true,success:todo});
    } catch (error) {
        next(error);
    }
}

exports.getUserTodo = async (req,res,next)=>{
    try {
        const {userID} = req.body;
        let todo = await ToDOServices.getTodoData(userID);

        res.json({status:true,success:todo});
    } catch (error) {
        next(error);
    }
}

exports.deleteTodo = async (req,res,next)=>{
    try {
        const {id} = req.body;
        let deleted = await ToDOServices.deleteTodo(id);
        res.json({status:true,success:deleted});
    } catch (error) {
        next(error);
    }
}