import express from 'express';
import jwt from "jsonwebtoken";



export function authMiddleware(req:express.Request,res:express.Response,next:express.NextFunction){
    const token = req.headers.authorization|| "";
    try{
        const result  = jwt.verify(token,process.env.JWT_SECRET||"")
        //give better types later
        req.body = {
            ...req.body,
            //@ts-ignore
            userId:result.userId,
            //@ts-ignore
            email: result.email
        }
    }catch(e){
        return res.json({
            message: "Incorrect auth token"
        })
    }
    next()
}