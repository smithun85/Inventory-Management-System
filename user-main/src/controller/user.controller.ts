import  express,{ Express,Request,Response } from 'express';
import { userLogin,userSignUp } from '../types/user.types';
import { userService } from '../services/user.service';

let userservice = new userService; 
/**
 * @param req 
 * @param res
 * @description function for sign up. 
 */
export async function singup(req:Request,res:Response){
    try {
        let signupBody:userSignUp = req.body;
        let responseResult = await userservice.singup(signupBody);
        res.send(responseResult);
    } catch (error) {
        console.log(error);
        res.json({
            code:500,
            message:"something went wrong",
            resone:error
        });
    }
}

/**
 * @param req 
 * @param res
 * @description function for login. 
 */
export async function login(req:Request,res:Response){
    try {
        let loginBody:userLogin = req.body;
        let responseResult = await userservice.login(loginBody);
        res.send(responseResult)
    } catch (error) {
        console.log(error);
        res.json({
            code:500,
            message:"something went wrong",
            response:error
        });
    }
}

/**
 * @param req 
 * @param res
 * @description function for get profile data. 
 */
export async function getProfile(req:Request,res:Response){
    try {
        let responseResult = await userservice.getUserDetail();
        res.send(responseResult)
    } catch (error) {
        console.log(error);
        res.json({
            code:500,
            message:"something went wrong",
            resone:error
        });
    }
}