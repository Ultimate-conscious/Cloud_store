import { Router } from "express";
import { signinSchema, signupSchema } from "../utils/zodSchemas";
import { User,PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const client = new PrismaClient();

export const userRouter = Router()

userRouter.get('/',(req,res)=>{
    res.send("HI it is working");
})

userRouter.post('/signup',async (req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Signup credentials not valid"
        })
    }
    const existingUser = await client.user.findFirst({
        where:{
            email: body.email
        }
    })
    if(existingUser){
        return res.status(411).json({
            message: "User with this email already exist"
        })
    }
    //pw hashing done
    const hashedpw =await bcrypt.hash(body.password,10);
    const user = await client.user.create({
        data: {
            ...body,
            password: hashedpw
        }
    })

    //get them a jwt
    const token = jwt.sign({
        userid: user.id,
        email: user.email
    },process.env.JWT_SECRET|| "")

    return res.json({
        message: "User created succcessfully",
        token
    })


})

userRouter.post('/signin',async (req,res)=>{
    const body = req.body;
    const {success} = signinSchema.safeParse(body);

    

    if(!success){
        return res.status(411).json({
            message: "Signin credentials not valid"
        })
    }

    const user = await client.user.findFirst({
        where:{
            email: body.email
        }
    })

    if(!user){
        return res.status(411).json({
            message: "NO user exists with these credentials"
        })
    }

    bcrypt.compare(body.password, user.password, (err, result) => {
        if (err || !result) {
            //console.error('Error comparing passwords:', err);
            return res.status(411).json({
                message: "Password is incorrect!"
            });
        }
    })
    //get them a jwt
    const token = jwt.sign({
        userid: user.id,
        email: user.email
    },process.env.JWT_SECRET|| "")
    res.json({
        token,
        message: "User signin done!"
    })
})