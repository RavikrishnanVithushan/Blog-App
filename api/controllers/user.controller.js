import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bycryptjs from 'bcryptjs'

export const test = async (req,res)=>{
    res.json({message:"API is working"});
}

export const updateUser = async (req,res,next) =>{
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403,'You are not allowed to update this user'));
    }
    if(req.body.password){
        if(req.body.password.length < 6){
            return next(errorHandler(400,'Password must be greater than 6 characters'))
        }

        req.body.password = bycryptjs.hashSync(req.body.password,10)
    }
    if(req.body.username){
        if(req.body.username.length < 7 || req.body.username.length >20 ){
            return next(errorHandler(400,'Username must be between 7 and 20 characters'))
        }
        if(req.body.username.includes(' ')){
            return next(errorHandler(400,'Username cannot conatins spaces'))
        }
        if(req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400,'Username must be in lowercase'))
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400,'Username can only contain letters and numbers'))
        }
    }

        try{
            const updateUser = await User.findByIdAndUpdate(req.params.userId,{
                $set: {
                    username:req.body.username,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture,
                    password:req.body.password,
                }
            },{new:true});

            const {password, ...rest} = updateUser._doc;
            res.status(200).json(rest);

        }catch(error){
            next(error)
        }
    
}

export const  deleteUser = async (req,res,next)=>{
  if(req.user.id !== req.params.userId){
    return next(errorHandler(403,'You are not authorized to delete this account!!'));
  }
  
  try{
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json('User deleted successfully!!');
  }catch(error){
    next(error)
  }
}

export const signout = async (req,res,next) =>{
    try{
        res.clearCookie('access_token').status(200).json('User has been signed out');
    }catch (error){
        next(error);
    }
}