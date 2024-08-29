import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function generateFileKey(folderId:number,userId:number){


    let parentId: any = folderId;
    

    let path ='';


    while(parentId!==null){
        const folder = await client.folder.findFirst({
            where:{
                id:parentId,
                userId
            }
        })

        path = folder?.name + '/' + path;
        parentId = folder?.parentId|| null;
    }

    // return path as "base@email.com/folder1/folder2/.../final/"-> key of a file
    return path;
}