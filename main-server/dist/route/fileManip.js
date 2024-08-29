"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../utils/authMiddleware");
const client_1 = require("@prisma/client");
const s3client_1 = require("../utils/s3client");
const generatefileKey_1 = require("../utils/generatefileKey");
const zodSchemas_1 = require("../utils/zodSchemas");
exports.fileRouter = (0, express_1.Router)();
exports.fileRouter.use(authMiddleware_1.authMiddleware);
const client = new client_1.PrismaClient();
exports.fileRouter.put('/uploadfile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    ///////check this endpoint 
    const body = req.body;
    const { success } = zodSchemas_1.fileCreateSchema.safeParse(body);
    /*body = {
        folderId,
        name,
        contentType
    }*/
    if (!success) {
        return res.json({
            message: "Invalid request body!"
        });
    }
    const key = yield (0, generatefileKey_1.generateFileKey)(body.folderId, body.userId);
    const file = yield client.file.create({
        data: {
            userId: body.userId,
            folderId: body.folderId,
            name: body.name,
            key: (key + body.name),
            contentType: body.contentType
        }
    });
    const url = yield (0, s3client_1.getUploadURL)(file.key, body.contentType);
    res.json({
        url
    });
}));
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
