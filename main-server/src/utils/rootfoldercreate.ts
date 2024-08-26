import { PrismaClient } from "@prisma/client";
import { signupSchemaType } from "./zodSchemas";

const client  = new PrismaClient();

export async function createRootFolder(body: signupSchemaType,userId: number){
    //console.log('inside the func');
    try{
        const Folder = await client.folder.create({
            data:{
                name: body.email,
                userId
            }
        })
    }catch(e){
        console.log(e);
    }
    
    //console.log('complpeted');
}