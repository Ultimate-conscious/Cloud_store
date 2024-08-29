import { Router } from "express";
import { authMiddleware } from "../utils/authMiddleware";
import { PrismaClient } from "@prisma/client";
import { getObjectURL, getUploadURL } from "../utils/s3client";
import { generateFileKey } from "../utils/generatefileKey";
import { fileCreateSchema } from "../utils/zodSchemas";


export const fileRouter = Router();

fileRouter.use(authMiddleware);

const client = new PrismaClient();

fileRouter.put('/uploadfile',async (req,res)=>{


    ///////check this endpoint 
    const body = req.body;
    const {success} = fileCreateSchema.safeParse(body)
    /*body = {
        folderId,
        name,
        contentType
    }*/
   if(!success){
        return res.json({
            message: "Invalid request body!"
        })
   }

    const key = await generateFileKey(body.folderId,body.userId);

    const file = await client.file.create({
        data:{
            userId: body.userId,
            folderId: body.folderId,
            name: body.name,
            key: (key + body.name),
            contentType: body.contentType
        }
    })

    const url = await getUploadURL(file.key,body.contentType)

    res.json({
        url
    })
    
})

// no need for /getfile convert it to /deletefile 

// fileRouter.get('/getfile',async(req,res)=>{
//     const body = req.body;
//     // {
//     //     fileId,
//     //     email,
//     //     userId,
//     // }

//     const file = await client.file.findFirst({
//         where:{
//             userId: body.userId,
//             id: body.fileId
//         }
//     })

//     const url = await getObjectURL(file?.key || '')

//     return res.json({
//         url
//     })
    
// })

// fileRouter.get('/asd',async (req,res)=>{
//     const body =  req.body;

//     const path = await generateFileKey(body.id,body.userId)

//     return res.json({
//         path
//     })

// })

