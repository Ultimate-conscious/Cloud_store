import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials:{
        accessKeyId: process.env.S3_ACCESS_KEY || '',
        secretAccessKey: process.env.S3_SECRET_KEY || ''
    }
})

export async function getObjectURL(key:string){
    const command = new GetObjectCommand({
        Bucket: 'ccbox-bucket',
        Key: key
    })
    const url = await getSignedUrl(s3Client,command);

    return url;
}