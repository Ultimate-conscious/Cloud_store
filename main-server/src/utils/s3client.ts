import { S3Client, GetObjectCommand, UploadPartCommand, PutObjectCommand } from "@aws-sdk/client-s3";
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

export async function getUploadURL(key:string, contentType: string ){
    const command = new PutObjectCommand({
        Bucket: 'ccbox-bucket',
        Key: key,
        ContentType: contentType
    })
    const url = await getSignedUrl(s3Client,command);
    return url;
}