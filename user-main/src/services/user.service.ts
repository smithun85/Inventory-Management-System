import { userLoginResponce, userDetail, userSignUp, userLogin } from "../types/user.types";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config({path : '.env'});
export class userService{
    constructor () { }
   
    /**
     * 
     */
    async singup(signupBody:userSignUp):Promise<any> {
        return new Promise((resolve,reject) =>{
            if(signupBody.username === "admin" && signupBody.password === "admin@123"){
                resolve({
                    code:200,
                    message:"user register"
                });
            } else {

            }
        });
    }
    /**
     * 
     */
    async login(loginBody:userLogin):Promise<userLoginResponce> {
        return new Promise((resolve,reject) =>{
            if(loginBody.username === "admin" && loginBody.password === "admin@123"){
                let token = jwt.sign({
                    id:"1",
                    username:"shivam",
                    loginTime:new Date(),
                    mobileNumber:"123456789"
                },"fgsdfgasfhasgdkjfhadsgkfjas",{
                    expiresIn:"2h"
                })
                resolve({id:"1",token:token});
            } else {
                reject({
                    code:200,
                    message:"username or password is worng"
                })
            }
        });
    }

    /**
     * 
     */
    async getUserDetail():Promise<userDetail>{
        return new Promise((resolve,reject) =>{
            resolve({
                id:"1",
                email:"something@gmail.com",
                username:"someone",
                firstName:"someone",
                lastName:"someone",
                mobileNumer:"1234567890"
            })
        });
    }
}