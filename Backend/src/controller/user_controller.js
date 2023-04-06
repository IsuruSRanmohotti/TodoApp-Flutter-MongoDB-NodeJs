const UserService = require('../services/user_services');



exports.register = async(req,res,next)=>{
    try{
const {email,password} = req.body;
const successRes = await UserService.registerUser(email,password);

res.json({status:true,success:`${email} User Registered Success`})
    }catch(err){
        throw err;
    }

}

exports.login = async(req,res,next)=>{
    try{
const {email,password} = req.body;
const user = await UserService.checkUser(email);
console.log("----------------user---------",user)
if(!user){
    throw new Error("User Dont Exist");
}
const isMatch = await user.comparePassword(password);
if(isMatch == false){
    throw new Error("Password is invalid");
}

let tokenData = {_id:user._id,email:user.email};

const token = await UserService.generateToken(tokenData,"secretKey","1h");

res.status(200).json({status:true,token:token});
 
    }catch(err){
        throw err;
    }

}