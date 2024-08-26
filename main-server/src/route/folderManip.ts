import { Router } from "express";
import { authMiddleware } from "../utils/authMiddleware";
import { PrismaClient } from "@prisma/client";
import { folderCreateSchema, getFoldersSchema } from "../utils/zodSchemas";

export const folderRouter = Router();

folderRouter.use(authMiddleware);

const client = new PrismaClient();

folderRouter.get('/getfolders',async(req,res)=>{
    const body =  req.body;

    const {success} = getFoldersSchema.safeParse(body);

    if(!success){
        return res.json({
            message: "Incorrect request body provided!"
        })
    }

    const folders = await client.folder.findMany({
        where:{
            parentId: body.parentId,
            userId: body.userId
        }
    })
    res.status(200).json({
        folders
    })
})

folderRouter.post('/createfolder',async (req,res)=>{
    const body = req.body;
    const {success} = folderCreateSchema.safeParse(body);
    if(!success){
        return res.json({
            message: "Incorrect Request body provided!"
        })
    }
    const newfolder = await client.folder.create({
        data:{
            name: body.name,
            userId: body.userId,
            parentId: body.parentId
        }
    })
    
    return res.json({
        message: "Folder created successfully"
    })
    
})

folderRouter.delete('/deletefolder',(req,res)=>{

})
