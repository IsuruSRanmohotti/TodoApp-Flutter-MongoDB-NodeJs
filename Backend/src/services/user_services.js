const userModel = require("../models/user_model");
const jwt = require('jsonwebtoken');


class UserService{
static async registerUser(email,password){
    try{
        const createUser = new userModel({email,password});
        return await createUser.save();
    }catch(err){
        throw err;
    }
}

static async checkUser(email){
    try {
        return await userModel.findOne({email});
    } catch (error) {
        throw error;
    }
}

static async generateToken(tokenData,secretKey,jwt_expire){
    return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
}

}
module.exports = UserService;