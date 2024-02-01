import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username === '' || email ==='' || password === ''){
        return errorHandler(400,'All Fields are required!!!');
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });

    try{
        await newUser.save();
        res.status(201).json({message:'User created succesfully!!'})
    }catch(error){
        next(error)
    }

}