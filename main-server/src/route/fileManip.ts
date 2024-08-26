import { Router } from "express";
import { authMiddleware } from "../utils/authMiddleware";
import { PrismaClient } from "@prisma/client";
import { getObjectURL, getUploadURL } from "../utils/s3client";


export const fileRouter = Router();

fileRouter.use(authMiddleware);

const client = new PrismaClient();

fileRouter.put('/uploadfile',async (req,res)=>{
    const body = req.body;

    const url = await getUploadURL(body.key,body.contentType)

    res.json({
        url
    })
    
})

fileRouter.get('/getfile',async(req,res)=>{
    const body = req.body;

    const url = await getObjectURL(body.key)

    return res.json({
        url
    })
    
})

// fileRouter.post('/createfolder',async (req,res)=>{

//     //check if any more auth checks are required
//     const body = req.body;

//     const {success} = folderCreateSchema.safeParse(body);

//     if(!success){
//         return res.status(411).json({
//             message: "Indavid inputs"
//         })
//     }

//     const folder = await client.folder.create({
//         data:{
//             ...body
//         }
//     })
    
//     return res.json({
//         message: "Folder created successfully"
//     })

// })

// fileRouter.delete('/deletefolder',(req,res)=>{
    
// })
// fileRouter.delete('/deletefile',(req,res)=>{
    
// })

